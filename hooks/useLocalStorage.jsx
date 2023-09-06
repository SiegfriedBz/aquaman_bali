import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue == null) {
        console.log('initialValue', initialValue)
        return initialValue
      } else {
        console.log(jsonValue)
        return JSON.parse(jsonValue)
      }
    } else {
      console.log('initialValue', initialValue)
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

  console.log('value', value)

  return [value, setValue]
}
