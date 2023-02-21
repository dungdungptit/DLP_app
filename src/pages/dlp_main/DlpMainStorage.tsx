import React from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const DlpMainStorage = () => {
  const dlpmain = useModel('dlpmain');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dlpmain.storageModel(values.folder_in, values.file_out);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      className={styles.formNmap}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Folder In" name="folder_in" rules={[{ required: true, message: 'Nhập folder in!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="File Out" name="file_out" rules={[{ required: true, message: 'Nhập folder out!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button type="primary" htmlType="submit" className={styles.itemFormButton} loading={dlpmain.loading[0]}>
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DlpMainStorage;
