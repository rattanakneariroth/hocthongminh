import Image from "next/image"
import lop6 from '../../public/lop-6.webp'
import lop7 from '../../public/lop-7.webp'
import lop8 from '../../public/lop-8.webp'
import lop9 from '../../public/lop-9.webp'
export default function THCS() {
  return (
    <div >
        <div>
            <h1 className="mx-36 text-3xl font-extrabold ">Khối THCS</h1>
        </div>
        <div className="container mx-5 my-4">
            <div className="w-64 border">
                <Image src={lop6} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <a href="#" className="text-center bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Luyện ngay</a>
                </div>
            </div>
            <div className="w-64 border">
                <Image src={lop7} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <a href="#" className="text-center bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Luyện ngay</a>
                </div>
            </div>
            <div className="w-64 border">
                <Image src={lop8} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <a href="#" className="text-center bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Luyện ngay</a>
                </div>
            </div>
            <div className="w-64 border">
                <Image src={lop9} className="w-full" alt="lop6"/>
                 <div className="p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
                    <a href="#" className="text-center bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Luyện ngay</a>
                </div>
            </div>
        </div>
    

    </div>
  )
}
