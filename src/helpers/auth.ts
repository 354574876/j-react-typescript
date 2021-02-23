import { Jwt } from './../store/models/auth'
export function isAuth(): Jwt | boolean {
  const jwt = localStorage.getItem('jwt')
  return jwt ? JSON.parse(jwt) : false
}
