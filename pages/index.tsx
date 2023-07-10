import Banner from '@/components/Body/Banner'
import THCS from '@/components/Body/THCS'
import THPT from '@/components/Body/THPT'
import Header from '@/components/Header'
import DeThi from '@/components/Body/DeThi'
import LoiIch from '@/components/Body/LoiIch'
import Basic from '@/components/Body/Basic'
import DangkyAds from '@/components/Body/DangkyAds'



export default function Home() {
  return (
    <main className='bg-teal-50'>
      <Header/>
      <Banner/>
      <THCS/>
      <THPT/>
      <DeThi/>
      <LoiIch/>
      <Basic/>
      <DangkyAds/>
      
    </main>
  )
}
