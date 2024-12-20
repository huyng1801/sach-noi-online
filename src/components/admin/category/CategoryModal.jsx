import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const CategoryModal = ({
  visible,
  mode,
  initialValues,
  onCancel,
  onSubmit,
  loading,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(initialValues || { categoryName: '' });
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
      title={mode === 'create' ? 'Thêm Mới Danh Mục' : 'Chỉnh Sửa Danh Mục'} // Vietnamese title
      open={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      confirmLoading={loading}
      maskClosable={false}
      destroyOnClose
      okText="Lưu" // Vietnamese "Save" button text
      cancelText="Hủy" // Vietnamese "Cancel" button text
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="categoryName"
          label="Tên Danh Mục" // Vietnamese label
          rules={[
            { required: true, message: 'Vui lòng nhập tên danh mục' }, // Vietnamese error message
            { max: 255, message: 'Tên danh mục không được vượt quá 255 ký tự' }, // Vietnamese error message
          ]}
        >
          <Input placeholder="Nhập tên danh mục" /> 
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
