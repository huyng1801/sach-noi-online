import { useState, useEffect, useCallback, useRef } from 'react';
import { message } from 'antd';
import { debounce } from 'lodash';
import { storyService } from '../services/storyService';
import { categoryService } from '../services/categoryService';
import { authorService } from '../services/authorService';
import { narratorService } from '../services/narratorService';
export const useStoryManagement = () => {
  // Stories state
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter options state
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [narrators, setNarrators] = useState([]);
  
  // Filters state
  const [filters, setFilters] = useState({
    categoryId: undefined,
    authorId: undefined,
    narratorId: undefined,
  });

  // Pagination state
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const previousFilters = useRef(filters);
  
  // Load filter options
  const loadFilterOptions = async () => {
    try {
      const [categoriesResponse, authorsResponse, narratorsResponse] = await Promise.all([
        categoryService.fetchCategories({ pageNumber: 1, pageSize: 100 }),
        authorService.fetchAuthors({ pageNumber: 1, pageSize: 100 }),
        narratorService.fetchNarrators({ pageNumber: 1, pageSize: 100 })
      ]);

      // Add "All" option to each list
      setCategories([...categoriesResponse.items]);
      setAuthors([...authorsResponse.items]);
      setNarrators([...narratorsResponse.items]);
    } catch (error) {
      message.error('Không thể tải các tùy chọn bộ lọc');
    }
  };

  // Load stories with debounce and filters
  const loadStories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await storyService.fetchStories({
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
        ...filters,    // Send filters to the API
        search: searchQuery,
      });

      setStories(response.items);
      setPagination(prev => ({
        ...prev,
        total: response.totalItems,
        current: response.pageNumber,
        pageSize: response.pageSize
      }));
    } catch (error) {
      message.error('Không thể tải câu chuyện');
    } finally {
      setLoading(false);
    }
  }, [pagination.current, pagination.pageSize, filters, searchQuery]);

  // Debounced load stories
  const debouncedLoadStories = useCallback(
    debounce(() => {
      loadStories();
    }, 500),
    [loadStories]
  );

  // Initial load
  useEffect(() => {
    loadFilterOptions();
  }, []);

  useEffect(() => {
    // Only reload if filters have actually changed
    if (JSON.stringify(previousFilters.current) !== JSON.stringify(filters)) {
      debouncedLoadStories();
      previousFilters.current = filters;
    }
    return () => debouncedLoadStories.cancel();
  }, [debouncedLoadStories, filters]);

  // Table handlers
  const handleTableChange = (newPagination) => {
    setPagination(prev => ({
      ...prev,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    }));
  };

  // Search and filter handlers
  const handleSearch = useCallback((value) => {
    setSearchQuery(value);
    setPagination(prev => ({ ...prev, current: 1 }));
  }, []);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters(prev => {
      // Only update if value has changed
      if (prev[filterType] === value) {
        return prev;
      }
      return {
        ...prev,
        [filterType]: value === 'all' ? undefined : value // Handle 'all' selection
      };
    });
    setPagination(prev => ({ ...prev, current: 1 }));
  }, []);

  // Modal handlers
  const handleAdd = useCallback(() => {
    setModalMode('create');
    setSelectedStory(null);
    setIsModalVisible(true);
  }, []);

  const handleEdit = useCallback((story) => {
    setModalMode('edit');
    setSelectedStory(story);
    setIsModalVisible(true);
  }, []);

  const handleDelete = useCallback(async (id, isSoftDelete = false) => {
    try {
      setLoading(true);
      if (isSoftDelete) {
        await storyService.softDeleteStory(id);
      } else {
        await storyService.deleteStory(id);
      }
      message.success('Câu chuyện đã được xóa thành công');
      loadStories();
    } catch (error) {
      message.error('Không thể xóa câu chuyện');
    } finally {
      setLoading(false);
    }
  }, [loadStories]);

  const handleModalCancel = useCallback(() => {
    setIsModalVisible(false);
    setSelectedStory(null);
  }, []);

  const handleModalSubmit = useCallback(async (values) => {
    try {
      setLoading(true);
      if (modalMode === 'create') {
        await storyService.createStory(values);
        message.success('Câu chuyện đã được tạo thành công');
      } else {
        await storyService.updateStory(selectedStory.id, values);
        message.success('Câu chuyện đã được cập nhật thành công');
      }
      
      setIsModalVisible(false);
      setSelectedStory(null);
      loadStories();
    } catch (error) {
      message.error(`Không thể ${modalMode} câu chuyện`);
    } finally {
      setLoading(false);
    }
  }, [modalMode, selectedStory, loadStories]);

  return {
    // Data
    stories,
    categories,
    authors,
    narrators,
    
    // State
    loading,
    pagination,
    selectedStory,
    isModalVisible,
    modalMode,
    filters,

    // Handlers
    handleTableChange,
    handleSearch,
    handleFilterChange,
    handleAdd,
    handleEdit,
    handleDelete,
    handleModalCancel,
    handleModalSubmit,
  };
};
