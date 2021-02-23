import React from 'react'
import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { RouterState } from 'connected-react-router'
import { Link } from 'react-router-dom'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'

function useAction(currentPath: string, path: string): string {
  return currentPath === path ? 'ant-menu-item-selected' : ''
}

const Navigation = () => {
  const router = useSelector<AppState, RouterState>(state => state.router)
  const pathname = router.location.pathname
  const isHome = useAction(pathname, '/')
  const isShop = useAction(pathname, '/shop')
  const isLogin = useAction(pathname, '/login')
  const isRegister = useAction(pathname, '/register')

  const authLink = () => {
    return isAuth() ? (
      <Menu.Item className={isLogin}>注销</Menu.Item>
    ) : (
      <>
        <Menu.Item className={isLogin}>
          <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item className={isRegister}>
          <Link to="/register">注册</Link>
        </Menu.Item>
      </>
    )
  }
  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">商场</Link>
      </Menu.Item>
      {authLink()}
    </Menu>
  )
}

export default Navigation
