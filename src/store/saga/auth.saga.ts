import { API } from './../../config'
import {
  REGISTER,
  RegisterAction,
  REGISTER_SUCCESS,
  registerSuccess,
  registerFail,
  LOGIN,
  LoginAction,
  loginSuccess,
  loginFail,
} from './../actions/auth.actions'
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* handleRegister(action: RegisterAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerFail(error.response.data.error))
  }
}
export default function* authSaga() {
  yield takeEvery(REGISTER, handleRegister)
  yield takeEvery(LOGIN, handleLogin)
}

function* handleLogin(action: LoginAction) {
  try {
    let res = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(res.data))
    yield put(loginSuccess())
  } catch (error) {
    yield put(loginFail(error.response.data.error))
  }
}
