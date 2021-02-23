export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const REGISTER_RESET = 'REGISTER_RESET'

export interface RegisterPayload {
  email: string
  name: string
  password: string
}

export interface RegisterAction {
  type: typeof REGISTER
  payload: RegisterPayload
}

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS
}

export interface RegisterFailAction {
  type: typeof REGISTER_FAIL
  message: string
}

export interface RegisterResetAction {
  type: typeof REGISTER_RESET
}

export const register = (payload: RegisterPayload): RegisterAction => ({
  type: REGISTER,
  payload,
})

export const registerSuccess = (): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
})

export const registerFail = (message: string): RegisterFailAction => ({
  type: REGISTER_FAIL,
  message,
})

export const resetRegister = (): RegisterResetAction => ({
  type: REGISTER_RESET,
})

// 登录
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginAction {
  type: typeof LOGIN
  payload: LoginPayload
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL
  message: string
}

export const login = (payload: LoginPayload): LoginAction => ({
  type: LOGIN,
  payload,
})

export const loginSuccess = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
})

export const loginFail = (message: string): LoginFailAction => ({
  type: LOGIN_FAIL,
  message,
})

export type AuthUnionType =
  | RegisterAction
  | RegisterFailAction
  | RegisterSuccessAction
  | RegisterResetAction
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
