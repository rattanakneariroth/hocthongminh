import Banner from '@/components/Body/Banner'
import THCS from '@/components/Body/THCS'
import THPT from '@/components/Body/THPT'
import Header from '@/components/Header'
import DeThi from '@/components/Body/DeThi'
import LoiIch from '@/components/Body/LoiIch'



export default function Home() {
  return (
    <main className='bg-teal-50'>
      <Header/>
      <Banner/>
      <THCS/>
      <THPT/>
      <DeThi/>
      <LoiIch/>
      
    </main>
  )
}
