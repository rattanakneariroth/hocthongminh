import Image from 'next/image'
import lop10 from '../../public/lop-10.webp'
import lop11 from '../../public/lop-11.webp'
import lop12 from '../../public/lop-12.webp'
export default function THPT() {
  return (
    <div>
         <div>
            <h1 className="container mx-36 text-3xl font-extrabold pl-10">Khối THPT</h1>
        </div>
        <div className="  mt-5 my-4 grid-cols-4 gap-4 justify-center flex items-center ">
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop10} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                        Luyện ngay</button>
                </div>
            </div>
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop11} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-violet-400 text-violet-400 font-semibold hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded">
                    Luyện ngay</button>
                </div>
            </div>
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop12} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-red-300 text-red-300 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
                    Luyện ngay</button>                
                </div>
            </div>
            
        </div>
    
    </div>
  )
}
