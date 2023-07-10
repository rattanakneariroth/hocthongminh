import Image from "next/image"
import Phone from '../../public/phone-wrapper.webp'
import image1 from '../../public/image-1.webp'
import image2 from '../../public/image-2.webp'
import image3 from '../../public/image-3.webp'
export default function LoiIch() {
  return (
    <div className="pt-10 bg-white">
        <div className="text-center  ">
            <h1 className="font-extrabold text-3xl ">LỢi Ích</h1>
            <h2 className="text-2xl font-semibold text-stone-600">Phương pháp phát triển khả năng tự học của Học Thông Minh</h2>
        </div>
        <div className="relative block">
                <div>
                    <Image src={Phone} className=" absolute right-"  alt="phone"/>

                </div>
                <div className="mt-5 my-4 grid-cols-3 gap-16 justify-center flex items-center">
                    <div className="text-center flex flex-col items-center w-64">
                        <Image src={image1} className="md:w-32" alt="image1"/>
                        <div className="px-4">
                            <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                        </div>
                    </div>
                    <div className="text-center flex flex-col items-center w-64" >
                        <Image src={image2} className="md:w-32" alt="image2"/>
                        <div className="px-4">
                            <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-64">
                        <Image src={image3} className="md:w-32" alt="image3"/>
                        <div className="px-4">
                            <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                        </div>
                    </div>
                </div>
                
            
                
            

        </div>
    </div>
  )
}
