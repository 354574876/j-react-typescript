import { LOGIN_FAIL, LOGIN_SUCCESS } from './../actions/auth.actions'
import {
  AuthUnionType,
  REGISTER_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_RESET,
  LOGIN,
} from '../actions/auth.actions'

export interface AuthState {
  register: {
    loaded: boolean
    success: boolean
    message: string
  }
  login: {
    loaded: boolean
    success: boolean
    message: string
  }
}

const initState = {
  register: {
    loaded: false,
    success: false,
    message: '',
  },
  login: {
    loaded: false,
    success: false,
    message: '',
  },
}

export default function authReducer(state = initState, action: AuthUnionType) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: {
          loaded: false,
          success: false,
        },
      }
    case REGISTER_FAIL:
      return {
        ...state,
        register: {
          loaded: true,
          success: false,
          message: action.message,
        },
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          loaded: true,
          success: true,
        },
      }
    case REGISTER_RESET:
      return {
        ...state,
        register: {
          loaded: false,
          success: false,
          message: '',
        },
      }
    case LOGIN:
      return {
        ...state,
        login: {
          loaded: false,
          success: false,
          message: '',
        },
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          loaded: true,
          success: true,
          message: '',
        },
      }
    case LOGIN_FAIL:
      return {
        ...state,
        login: {
          loaded: true,
          success: false,
          message: action.message,
        },
      }
    default:
      return state
  }
}
