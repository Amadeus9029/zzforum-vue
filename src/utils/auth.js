import db from '@/utils/localstorage'
const TokenKey = 'Auth-Token'

export function getToken() {
  return db.get()
}

export function setToken(token) {
  return db.save(TokenKey, token)
}

export function removeToken() {
  return db.remove(TokenKey)
}
