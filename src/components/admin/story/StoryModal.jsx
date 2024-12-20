import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const StoryModal = ({
  visible,
  mode,
  initialValues,
  onCancel,
  onSubmit,
  loading,
  authors,
  categories,
  narrators,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(initialValues || {
        title: '',
        description: '',
        authorId: undefined,
        categoryId: undefined,
        narratorId: undefined,
      });
    } else {
      form.resetFields();
    }
  }, [visible, initialValues, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  return (
    <Modal
      title={mode === 'create' ? 'Thêm Truyện Mới' : 'Chỉnh Sửa Truyện'}
      open={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      confirmLoading={loading}
      maskClosable={false}
      destroyOnClose
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="title"
          label="Tiêu Đề"
          rules={[
            { required: true, message: 'Vui lòng nhập tiêu đề truyện' },
            { max: 255, message: 'Tiêu đề không được vượt quá 255 ký tự' }
          ]}
        >
          <Input placeholder="Nhập tiêu đề truyện" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô Tả"
          rules={[
            { required: true, message: 'Vui lòng nhập mô tả truyện' },
            { max: 1000, message: 'Mô tả không được vượt quá 1000 ký tự' }
          ]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả truyện" />
        </Form.Item>

        <Form.Item
          name="authorId"
          label="Tác Giả"
          rules={[{ required: true, message: 'Vui lòng chọn tác giả' }]}
        >
          <Select placeholder="Chọn tác giả">
            {authors?.map(author => (
              <Select.Option key={author.id} value={author.id}>
                {author.authorName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="categoryId"
          label="Thể Loại"
          rules={[{ required: true, message: 'Vui lòng chọn thể loại' }]}
        >
          <Select placeholder="Chọn thể loại">
            {categories?.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.categoryName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="narratorId"
          label="Người Dẫn Chuyện"
          rules={[{ required: true, message: 'Vui lòng chọn người dẫn chuyện' }]}
        >
          <Select placeholder="Chọn người dẫn chuyện">
            {narrators?.map(narrator => (
              <Select.Option key={narrator.id} value={narrator.id}>
                {narrator.narratorName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="coverImageFile"
          label="Ảnh Bìa"
          valuePropName="fileList"
          getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
        >
          <Upload
            accept="image/*"
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Tải Ảnh Bìa Lên</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StoryModal;
