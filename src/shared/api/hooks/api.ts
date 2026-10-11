import axios from 'axios'
import { useAuthStore } from '../../store/auth.store'
import { authApi } from './auth'

export const $api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 15_000,
})
$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token')
      globalThis.location.href = '/'
    }
    return Promise.reject(error)
  }
)

$api.interceptors.request.use((conf) => {
  const token = useAuthStore.getState().accessToken
  if (token) conf.headers.Authorization = `Bearer ${token}`
  return conf
})

let isRefreshing = false
let queue: Array<(token: string) => void> = []

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config

    if (error.response?.status !== 401 || original._retry) {
      return Promise.reject(error)
    }

    const { refreshToken, setToken, logout } = useAuthStore.getState()
    if (!refreshToken) {
      logout()
      return Promise.reject(error)
    }

    original._retry = true

    if (isRefreshing) {
      return new Promise((resolve) => {
        queue.push((token) => {
          original.headers.Authorization = `Bearer ${token}`
          resolve($api(original))
        })
      })
    }

    isRefreshing = true

    try {
      const tokens = await authApi.refresh(refreshToken)
      setToken(tokens)

      queue.forEach((cb) => cb(tokens.access_token))
      queue = []

      original.headers.Authorization = `Bearer ${tokens.access_token}`
      return $api(original)
    } catch (e) {
      logout()
      queue = []
      window.location.href = '/login'
      return Promise.reject(e)
    } finally {
      isRefreshing = false
    }
  }
)