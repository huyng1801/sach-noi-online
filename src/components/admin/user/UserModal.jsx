import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, Upload, Switch, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const styles = {
  formItem: {
    marginBottom: '24px',
  },
  uploadList: {
    marginTop: '8px',
  },
};

const UserModal = ({
  visible,
  mode,
  initialValues,
  onCancel,
  onSubmit,
  loading,
}) => {
  const [form] = Form.useForm();

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

  const roleOptions = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Moderator', label: 'Moderator' },
    { value: 'User', label: 'User' },
  ];

  return (
    <Modal
      title={mode === 'create' ? 'Add New User' : 'Edit User'}
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
          name="username"
          label="Username"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          style={styles.formItem}
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>

        {mode === 'create' && (
          <Form.Item
            name="password"
            label="Password"
            style={styles.formItem}
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input.Password />
          </Form.Item>
        )}

        <Form.Item
          name="role"
          label="Role"
          style={styles.formItem}
          rules={[{ required: true, message: 'Please select role' }]}
        >
          <Select options={roleOptions} />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Avatar"
          style={styles.formItem}
          valuePropName="fileList"
          getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
        >
          <Upload
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
            style={styles.uploadList}
          >
            <Button icon={<UploadOutlined />}>Upload Avatar</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="isActive"
          label="Status"
          style={styles.formItem}
          valuePropName="checked"
        >
          <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;