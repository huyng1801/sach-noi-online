import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, Rate, Radio } from 'antd';

const { TextArea } = Input;

const styles = {
  formItem: {
    marginBottom: '24px',
  },
};

const RatingModal = ({
  visible,
  mode,
  initialValues,
  filters,
  onCancel,
  onSubmit,
  loading,
}) => {
  const [form] = Form.useForm();
  const { stories, users } = filters;

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
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

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={mode === 'create' ? 'Add New Rating' : 'Edit Rating'}
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      confirmLoading={loading}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="userId"
          label="User"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please select a user' }]}
        >
          <Select options={users} />
        </Form.Item>

        <Form.Item
          name="storyId"
          label="Story"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please select a story' }]}
        >
          <Select options={stories} />
        </Form.Item>

        <Form.Item
          name="ratingValue"
          label="Rating"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please provide a rating' }]}
        >
          <Rate allowHalf />
        </Form.Item>

        <Form.Item
          name="comment"
          label="Comment"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please enter a comment' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please select a status' }]}
        >
          <Radio.Group>
            <Radio.Button value="Approved">Approved</Radio.Button>
            <Radio.Button value="Pending">Pending</Radio.Button>
            <Radio.Button value="Rejected">Rejected</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RatingModal;