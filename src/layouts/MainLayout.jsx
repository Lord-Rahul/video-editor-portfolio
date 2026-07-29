import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

export default function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BackToTop />
    </>
  )
}
