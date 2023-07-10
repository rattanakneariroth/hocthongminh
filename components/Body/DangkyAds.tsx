import Image from "next/image"
import bannerclick from "../../public/banner-click.webp"
import bannerlock from '../../public/banner-lock.webp'
export default function DangkyAds() {
  return (
    <div className="flex">
        <div>
            <div >
                <div>Đăng ký</div>
                <div>tài khoản</div>
                <div>Free</div>
            </div>
            <ul>
                <li>Xem thống kê quá trình luyện tập</li>
                <li>Xem giải thích miễn phí</li>
                <li>Đề xuất học tập khi làm xong đề kiểm tra</li>
                <li>Biết điểm mạnh, điểm yếu sau mỗi bài thi</li>
            </ul>
            <div>
            <button className=" bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded">
                    Đăng ký ngay</button>
            </div>
        </div>
        <Image src={bannerclick} className="w-1/4 h-auto" alt="bannerlogin" />
        <Image src={bannerlock} className="w-48 h- h-auto" alt="lock"/>
        
    </div>
  )
}
