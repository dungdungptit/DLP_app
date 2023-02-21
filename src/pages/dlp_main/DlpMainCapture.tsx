import React from 'react';
import { Button, Checkbox, Form, Input, Switch } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const DlpMainCapture = () => {
  const dlpmain = useModel('dlpmain');
  const [checked, setChecked] = React.useState(false);

  const interval = React.useRef<any>();

  React.useEffect(() => {
    if (checked === true) {
      interval.current = setInterval(() => {
        dlpmain.captureModel();
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  }, [checked]);


  const onChange = (checked: boolean) => {
    setChecked(checked);
    console.log(`switch to ${checked}`);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        {/* <Button type="primary" htmlType="button" > */}
        <Switch checkedChildren="On" className={styles.itemFormButton} unCheckedChildren="Off" checked={checked} onChange={onChange} />
        {/* </Button> */}
      </Form.Item>
    </Form>
  );
};

export default DlpMainCapture;
