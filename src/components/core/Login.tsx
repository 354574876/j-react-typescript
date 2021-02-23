import React from 'react'
import Layout from './Layout'
import { Form, Input, Button, Result } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { login, LoginPayload } from '../../store/actions/auth.actions'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { Redirect } from 'react-router-dom'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}

const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  const onFinish = (values: LoginPayload) => {
    dispatch(login(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  // 处理登录失败
  const loginFail = () => {
    if (auth.login.loaded && !auth.login.success) {
      return (
        <Result status="error" title="登录失败" subTitle={auth.login.message} />
      )
    }
  }

  // 登录成功后跳转
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt // 断言
      if (role === 0) {
        // 注册用户
        return <Redirect to="/user/dashboard" />
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />
      }
    }
  }
  return (
    <Layout title="登录" subTitle="">
      {loginFail()}
      {redirectToDashboard()}
      <Form
        {...layout}
        name="j-react-typescript"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Login
