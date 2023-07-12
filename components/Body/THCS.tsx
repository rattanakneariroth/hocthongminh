import Image from "next/image"
import lop6 from '../../public/lop-6.webp'
import lop7 from '../../public/lop-7.webp'
import lop8 from '../../public/lop-8.webp'
import lop9 from '../../public/lop-9.webp'
export default function THCS() {
  return (
    <div >
        <div>
            <h1 className="container mx-36 text-3xl font-extrabold pl-10 ">Khối THCS</h1>
        </div>
        <div className=" mx-36 mt-5 my-4 grid-cols-4 gap-4 justify-center flex items-center">
            <div className="w-64 shadow-lg rounded-lg  transform transition duration-500 hover:scale-110 text-center " >
                <Image src={lop6} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded">
                    Luyện ngay</button>
                </div>
            </div>
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop7} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded">
                    Luyện ngay</button>
                </div>
                
            </div>
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop8} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded">
                    Luyện ngay</button>                
                </div>
            </div>
            <div className="w-64 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 text-center">
                <Image src={lop9} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <button className=" bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                    Luyện ngay</button>                   
                </div>
            </div>
        </div>
    

    </div>
  )
}
