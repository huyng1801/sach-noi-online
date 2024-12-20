import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Select, InputNumber, Upload, Switch, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AudioModal = ({
  visible,
  mode,
  initialValues,
  filters,
  onCancel,
  onSubmit,
  loading,
}) => {
  const [form] = Form.useForm();
  const { stories } = filters;
  const [audioDuration, setAudioDuration] = useState(null); // State to store audio duration

  // Form styles
  const styles = {
    formItem: {
      marginBottom: '24px',
    },
    uploadList: {
      marginTop: '8px',
    },
    inputNumber: {
      width: '100%',
    },
  };

  // Reset form when modal becomes visible or initialValues change
  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
      if (initialValues?.audioFile) {
        setAudioDuration(initialValues.audioFile.duration);
      }
    }
  }, [visible, initialValues, form]);

  // Handle file upload and extract duration
  const handleFileChange = (info) => {
    if (info.fileList.length === 0) return;

    const audioFile = info.fileList[0].originFileObj;
    const audio = new Audio(URL.createObjectURL(audioFile));

    audio.onloadedmetadata = () => {
      const duration = Math.round(audio.duration); // Duration in seconds
      setAudioDuration(duration);
      form.setFieldsValue({ duration }); // Set the duration in the form
    };
  };

  // Form submission handler
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  // Modal cancel handler
  const handleCancel = () => {
    form.resetFields();
    setAudioDuration(null); // Reset audio duration on cancel
    onCancel();
  };

  // Form validation rules
  const rules = {
    title: [{ required: true, message: 'Vui lòng nhập tiêu đề audio' }],
    description: [{ required: true, message: 'Vui lòng nhập mô tả audio' }],
    storyId: [{ required: true, message: 'Vui lòng chọn câu chuyện' }],
    audioFile: [{ required: mode === 'create', message: 'Vui lòng tải lên tệp audio' }],
    duration: [{ required: true, message: 'Vui lòng nhập thời lượng' }],
  };

  return (
    <Modal
      title={mode === 'create' ? 'Thêm Audio Mới' : 'Chỉnh Sửa Audio'}
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      confirmLoading={loading}
      width={800}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        {/* Title Field */}
        <Form.Item
          name="title"
          label="Tiêu Đề"
          style={styles.formItem}
          rules={rules.title}
        >
          <Input placeholder="Nhập tiêu đề audio" />
        </Form.Item>

        {/* Story Selection Field */}
        <Form.Item
          name="storyId"
          label="Câu Chuyện"
          style={styles.formItem}
          rules={rules.storyId}
        >
          <Select
            showSearch
            placeholder="Chọn câu chuyện"
            options={stories?.map(story => ({
              label: story.label,
              value: story.value,
            }))}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </Form.Item>

        {/* Audio File Upload Field */}
        <Form.Item
          name="audioFile"
          label="Tệp Audio"
          style={styles.formItem}
          valuePropName="fileList"
          getValueFromEvent={e => Array.isArray(e) ? e : e?.fileList}
          rules={rules.audioFile}
        >
          <Upload
            accept="audio/*"
            maxCount={1}
            beforeUpload={() => false}
            onChange={handleFileChange}
            style={styles.uploadList}
          >
            <Button icon={<UploadOutlined />}>Tải Lên Tệp Audio</Button>
          </Upload>
        </Form.Item>

        {/* Duration Field (Read-only) */}
        <Form.Item
          name="duration"
          label="Thời Lượng (giây)"
          style={styles.formItem}
          rules={rules.duration}
        >
          <InputNumber
            min={0}
            style={styles.inputNumber}
            placeholder="Nhập thời lượng (giây)"
            value={audioDuration} // Display the auto-calculated duration
            readOnly
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AudioModal;
