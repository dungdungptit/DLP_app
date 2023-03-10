import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { getInfo, login } from '@/services/Auth/auth';
import { Link, useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { history } from 'umi';
import data from '@/utils/data';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { loading, setLoading, loginModel } = useModel('auth');

  const onFinish = async (values: { username: string; password: string }) => {
    // console.log('Success:', values);
    console.log('Success:', values);
    const res = await loginModel({ username: values.username, password: values.password });
    console.log('res', res);
    // if (res.status === 200 && res.data?.jwt) {
    //   const info = await getInfo(values.username);
    //   localStorage.setItem('token', res.data?.jwt);
    //   localStorage.setItem('username', values.username);
    //   console.log('info', info);
    //   if (info.status === 200) {
    //     let systemRole = '';
    //     if (info.data?.data?.is_superuser === true) {
    //       systemRole = 'Admin'
    //     } else {
    //       systemRole = 'User'
    //     }
    //     localStorage.setItem('vaiTro', systemRole);
    //     setInitialState({
    //       ...initialState,
    //       currentUser: {
    //         ...info.data?.data,
    //         systemRole: systemRole,
    //       },
    //     });
    //     history.push(data?.path?.[systemRole] ?? '/');
    //     return;
    //   }
    // }
    // };
    localStorage.setItem('token', "abc");
    localStorage.setItem('username', values.username);
    localStorage.setItem('vaiTro', 'Admin');
    setInitialState({
      ...initialState,
      currentUser: {
        username: values.username,
        systemRole: 'Admin',
      },
    });
    history.push('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Link to="/" className={styles.header}>
            <img alt="logo" className={styles.logo} src="/logo.png" />
            <Title level={1} className={styles.title}>H??? th???ng ph??t hi???n t???n c??ng m???ng</Title>
          </Link>
        </div>

        <div className={styles.main}>
          <Form
            name="normal_login"
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Nh???p t??i kho???n!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="T??i kho???n" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Nh???p m???t kh???u!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="M???t kh???u"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Nh??? t??i kho???n</Checkbox>
              </Form.Item>

              <a className={styles.loginFormFogot} href="">
                Qu??n m???t kh???u
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                ????ng nh???p
              </Button>
              <a href="" className={styles.loginFormRegister}>????ng k??</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
