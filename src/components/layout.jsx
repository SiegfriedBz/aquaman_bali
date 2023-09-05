import Navbar from './navbar'
import Footer from './footer'
import { AppContextProvider } from '@/context/appContext'

export default function Layout({ children }) {
  return (
    <AppContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </AppContextProvider>
  )
}
