import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage(
    'aquaman-color-mode',
    'dark'
  )

  useEffect(() => {
    const bodyClasses = window.document.body.classList
    bodyClasses.toggle('dark', colorMode === 'dark')
  }, [colorMode])

  return [colorMode, setColorMode]
}
