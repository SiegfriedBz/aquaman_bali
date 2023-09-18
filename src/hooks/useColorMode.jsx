import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage(
    'aquaman-color-mode',
    () => {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      return 'light'
    }
  )

  useEffect(() => {
    const bodyClasses = window.document.body.classList
    bodyClasses.toggle('dark', colorMode === 'dark')
  }, [colorMode])

  return [colorMode, setColorMode]
}
