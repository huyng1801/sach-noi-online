import React from 'react';
import { Space, Input, Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const styles = {
  container: {
    marginBottom: '24px',
  },
  search: {
    width: 300,
  },
  dropdown: {
    width: 200,
    minWidth: 200,
  },
};

const StoryFilters = ({ 
  onSearch, 
  onAdd,
  onCategoryFilter,
  onAuthorFilter,
  onNarratorFilter,
  categories = [],
  authors = [],
  narrators = [],
  selectedFilters = {}
}) => {
  return (
    <div className="story-filters" style={styles.container}>
      <Space wrap size="middle">
        {/* <Search
          placeholder="Tìm kiếm câu chuyện..."
          allowClear
          onSearch={onSearch}
          style={styles.search}
        /> */}
        
        <Select
          placeholder="Lọc theo thể loại"
          allowClear
          style={styles.dropdown}
          onChange={onCategoryFilter}
          value={selectedFilters.categoryId}
        >
          <Select.Option value={undefined}>Tất cả thể loại</Select.Option>
          {categories?.map(category => (
            <Select.Option key={category.id} value={category.id}>
              {category.categoryName}
            </Select.Option>
          ))}
        </Select>

        <Select
          placeholder="Lọc theo tác giả"
          allowClear
          style={styles.dropdown}
          onChange={onAuthorFilter}
          value={selectedFilters.authorId}
        >
          <Select.Option value={undefined}>Tất cả tác giả</Select.Option>
          {authors?.map(author => (
            <Select.Option key={author.id} value={author.id}>
              {author.authorName}
            </Select.Option>
          ))}
        </Select>

        <Select
          placeholder="Lọc theo người kể"
          allowClear
          style={styles.dropdown}
          onChange={onNarratorFilter}
          value={selectedFilters.narratorId}
        >
          <Select.Option value={undefined}>Tất cả người kể</Select.Option>
          {narrators?.map(narrator => (
            <Select.Option key={narrator.id} value={narrator.id}>
              {narrator.narratorName}
            </Select.Option>
          ))}
        </Select>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAdd}
        >
          Thêm câu chuyện
        </Button>
      </Space>
    </div>
  );
};

export default StoryFilters;
