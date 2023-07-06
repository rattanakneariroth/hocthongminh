import Banner from '@/components/Body/Banner'
import THCS from '@/components/Body/THCS'
import Header from '@/components/Header'



export default function Home() {
  return (
    <main className='bg-teal-50'>
      <Header/>
      <Banner/>
      <THCS/>
      
    </main>
  )
}
