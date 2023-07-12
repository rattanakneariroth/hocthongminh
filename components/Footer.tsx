import Image from "next/image"
export default function Footer() {
  return (
    <div className=" p-0 m-0">
        <div className="px-32 py-14 flex grid-cols-3 gap-12 bg-teal-100 justify-around" >
            <div className="">
                <Image
                    className='md:cursor-pointer pb-8'
                    src="https://hocthongminh.com/images/logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                />
                <div className="">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>


                        <span className="font-sans">Tầng 3, Lô NT KĐT mới Phùng Khoang, Phường Trung Văn, Quận Nam Từ Liêm, Hà Nội</span>
                    </div>
                    <div>
                        <span className="pr-32">Cơ quan chủ quản: Công ty Cổ phần Đầu tư và Phát triển Koolsoft</span>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>

                        <span>hotro.hocthongminh@gmail.com</span>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-14 pt-8">
                <div>
                    <h1 className="underline font-semibold text-xl">Về chúng tôi</h1>
                    <div className="list-none">
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Liên hệ</a></li>
                    </div>

                </div>
                <div>
                    <h1 className="underline font-semibold text-xl">Chính sách</h1>
                    <div className="list-none">
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                    </div>
                </div>
                <div>
                    <h1 className="underline font-semibold text-xl">Thông tin</h1>
                    <div className="list-none">
                        <li><a href="#">Chia sẻ kiến thức </a></li>
                        <li><a href="#">Tin tức</a></li>
                        <li><a href="#">Tính điểm xét tốt nghiệp</a></li>
                        <li><a href="#">Tính điểm xét học bạ</a></li>
                    </div>
                </div>

            </div>
            <div className="pt-8">
                <h1 className="font-medium text-lg">Kết nối với <br />Hocthongminh</h1>
                
                <div className="flex">
                    
                    <div>
                        <Image
                        className='md:cursor-pointer'
                        src="https://hocthongminh.com/images/facebook.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </div>
                    <div>
                        <Image
                        className='md:cursor-pointer'
                        src="https://hocthongminh.com/images/social/youtube.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </div>
                    <div>
                        <Image
                        className='md:cursor-pointer'
                        src="https://hocthongminh.com/images/social/twitter.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </div>
                    <div>
                        <Image
                        className='md:cursor-pointer'
                        src="https://hocthongminh.com/images/social/pinterest.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
