import Image from "next/image"
import bannerclick from "../../public/banner-click.webp"
import bannerlock from '../../public/banner-lock.webp'
export default function DangkyAds() {
  return (
    <div className="flex justify-center p-16">
        
            <div className=" bg-white flex grid-cols-2 gap-4 border border-black border-solid rounded-2xl px-16 w-[70rem] h-[25rem] py-10">
                <div className="">
                    <div className="flex">
                        <div className="pr-16 font-semibold text-4xl">ĐĂNG KÝ <h1 className="text-teal-600">Tài khoản</h1>
                        </div>
                        <div className="text-shadow-amber-500 text-shadow-1 text-9xl text-amber-200 font-bold">Free</div>
                    </div>
                    <ul className="pb-5">
                        <li className="flex pb-2 font-svn-poppins"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>Xem thống kê quá trình luyện tập</li>
                        <li className="flex pb-2"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>Xem giải thích miễn phí</li>
                        <li className="flex pb-2"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>Đề xuất học tập khi làm xong đề kiểm tra</li>
                        <li className="flex pb-2"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18971 18.0048L0.561523 8.97239L3.50526 6.20109L9.18971 11.7437C13.1688 3.53243 21.9797 1.06905 25.025 0.86377C16.5795 4.80518 11.1184 14.0018 9.18971 18.0048Z" fill="#FFA800"></path></svg>Biết điểm mạnh, điểm yếu sau mỗi bài thi</li>
                    </ul>
                    <div >
                        <button className=" bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded">
                        Đăng ký ngay</button>
                    </div>
                </div>
                <div className="flex">
                    <Image src={bannerclick} className="absolute top-[2960px] right-[18%]  h-[22rem] w-[22rem] "  alt="bannerlogin" />
                    <Image src={bannerlock} className="absolute right-[15%] h-[6rem] w-[10rem]" alt="lock"/>
            
                </div>
            </div>
        
       
    </div>
  )
}
