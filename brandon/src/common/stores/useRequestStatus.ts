import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRequestStatus = defineStore('request-status', () => {
  const success = ref<boolean>(false)
  const error = ref<string | null>()
  const loading = ref<boolean>(false)

  const start = () => {
    loading.value = true
    error.value = null
  }

  const successResponse = () => {
    loading.value = false
    success.value = true
  }

  const errorResponse = (err: string) => {
    loading.value = false
    success.value = false
    error.value = err
  }

  return { success, error, loading, start, successResponse, errorResponse }
})
