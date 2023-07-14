import Banner from '@/components/Body/Banner'
import THCS from '@/components/Body/THCS'
import THPT from '@/components/Body/THPT'
import Header from '@/components/Header'
import DeThi from '@/components/Body/DeThi'
import LoiIch from '@/components/Body/LoiIch'
import Basic from '@/components/Body/Basic'
import DangkyAds from '@/components/Body/DangkyAds'
import Footer from '@/components/Footer'
import Blog from '@/components/Body/Blog'
import Recommend from '@/components/Body/Recommend'



export default function Home() {
  return (
    
    <main className='bg-teal-50 overflow-hidden'>
      <Header/>
      <Banner/>
      <THCS/>
      <THPT/>
      <DeThi/>
      <LoiIch/>
      <Basic/>
      <DangkyAds/>
      <Recommend/>
      <Blog/>
      <Footer/>
      
    </main>
  )
}
