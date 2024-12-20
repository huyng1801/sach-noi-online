import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const NarratorModal = ({
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
      form.setFieldsValue(initialValues || { narratorName: '' });
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
      title={mode === 'create' ? 'Thêm Tác Giả Mới' : 'Chỉnh Sửa Tác Giả'}
      open={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      confirmLoading={loading}
      maskClosable={false}
      destroyOnClose
      okText="Đồng ý"  // OK button in Vietnamese
      cancelText="Hủy" // Cancel button in Vietnamese
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="narratorName"
          label="Tên Tác Giả"
          rules={[
            { required: true, message: 'Vui lòng nhập tên tác giả' },
            { max: 255, message: 'Tên tác giả không được vượt quá 255 ký tự' }
          ]}
        >
          <Input placeholder="Nhập tên tác giả" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NarratorModal;
