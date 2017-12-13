import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/api_login',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return fetch({
    url: '/apo_user_info',
    method: 'get',
    params: { token }
  })
}

