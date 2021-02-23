import { Form, Input, Button, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  register,
  RegisterPayload,
  resetRegister,
} from '../../store/actions/auth.actions'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import Layout from './Layout'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
}
const Register = () => {
  const dispatch = useDispatch()
  const onFinish = (values: RegisterPayload) => {
    dispatch(register(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const [form] = Form.useForm()
  // 获取状态
  const auth = useSelector<AppState, AuthState>(state => state.auth)
  // 1. 注册成功清空表单
  useEffect(() => {
    if (auth.register.loaded && auth.register.success) {
      form.resetFields()
    }
  }, [auth])
  // 2. 注册成功提示
  const showSuccess = () => {
    if (auth.register.loaded && auth.register.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button key="1">
              <Link to="/login">登录</Link>
            </Button>,
          ]}
        />
      )
    }
  }
  // 3. 注册失败提示
  const showError = () => {
    if (auth.register.loaded && !auth.register.success) {
      return (
        <Result
          status="error"
          title="注册失败"
          subTitle={auth.register.message}
        />
      )
    }
  }
  // 4. 离开页面重置状态
  useEffect(() => {
    return () => {
      form.resetFields()
      dispatch(resetRegister())
    }
  }, [])

  const registerForm = () => {
    return (
      <Form
        {...layout}
        form={form}
        name="j-react-typescript-register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
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
            注册
          </Button>
        </Form.Item>
      </Form>
    )
  }
  return (
    <Layout title="注册" subTitle="">
      {showSuccess()}
      {showError()}
      {registerForm()}
    </Layout>
  )
}
export default Register
