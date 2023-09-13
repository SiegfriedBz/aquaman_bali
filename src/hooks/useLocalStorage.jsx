import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue == null) {
        return initialValue
      } else {
        return JSON.parse(jsonValue)
      }
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    if (value == null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue]
}
