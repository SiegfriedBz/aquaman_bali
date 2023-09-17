import { useState, createContext, useContext } from 'react'
import { mapMarkers } from '@/data/mapMarkers'

const AppContext = createContext()
export const useAppContext = () => {
  const value = useContext(AppContext)
  if (value == null) {
    throw new Error('AppContext must be used inside AppContextProvider')
  } else {
    return value
  }
}

export const AppContextProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [popup, setPopup] = useState(() => {
    return mapMarkers.canggu
  })

  return (
    <AppContext.Provider
      value={{
        showPopup,
        setShowPopup,
        popup,
        setPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
