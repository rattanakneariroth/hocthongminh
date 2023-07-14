import blog1 from '../../public/Con-lac-don-la-gi.png'
import blog2 from '../../public/Meo-thi-Toeic-part-4-2.png'
import blog3 from '../../public/Modification-of-the-Landscape-1.png'
import blog4 from '../../public/larana-company.png'
import Image from 'next/image'

export default function Blog() {
  return (
    <div>
        <div className='container mx-36 text-3xl font-extrabold pl-10'>
            <h1>Kiến Thức Hay</h1>
        </div>
        <div className=" mx-36 mt-5 my-4 grid-cols-4 gap-4 justify-center flex items-center flex-wrap">
            <div className="w-64 shadow-lg rounded-md  transform duration-500  text-center transition  ease-in-out hover:scale-110" >
                <Image src={blog1} className="w-full rounded-t-lg" alt="blog1"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    
                </div>
            </div>
            <div className="w-64 shadow-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={blog2} className="w-full rounded-t-lg" alt="blog2"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    
                </div>
                
            </div>
            <div className="w-64 shadow-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={blog3} className="w-full rounded-t-lg" alt="blog3"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                                
                </div>
            </div>
            <div className="w-64 shadow-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={blog4} className="w-full" alt="blog4"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
