import Image from "next/image"
import Phone from '../../public/phone-wrapper.webp'
import image1 from '../../public/image-1.webp'
import image2 from '../../public/image-2.webp'
import image3 from '../../public/image-3.webp'
export default function LoiIch() {
  return (
    <div>
        <div className="text-center">
            <h1>LỢi Ích</h1>
            <h2>Phương pháp phát triển khả năng tự học của Học Thông Minh</h2>
        </div>
        <div className="">
                <div>
                    <Image src={image1} className="" alt="image1"/>
                    <div>
                        <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                    </div>
                </div>
                <div>
                    <Image src={image1} className="" alt="image1"/>
                    <div>
                        <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                    </div>
                </div>
                <div>
                    <Image src={image1} className="" alt="image1"/>
                    <div>
                        <p>Học từ những sai lầm với những gợi ý thống kê quá trình học chi tiết</p>
                    </div>
                </div>
            
                <Image src={Phone} className="flex justify-center items-center h-screer" alt=""/>
            

        </div>
    </div>
  )
}
