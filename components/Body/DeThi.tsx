

export default function DeThi() {
  return (
    <div>
        <div style={{height: '400px', overflow: 'hidden', backgroundImage: "url('https://hocthongminh.com/images/event_bg_bottom.png')"}}>
            {/* <Image src={dethi} className="w-full" alt="dethi"/> */}
            <div className="text-center p-10 " >
                <div className="flex justify-center font-bold text-2xl ">
                    <h1 className="px-10 text-teal-500">Đề thi luyện tập
                        <span className="border-b-4 block transition-all duration-500 border-teal-500"></span>

                    </h1>
                    <h1 className="px-10">Luyện thi THPT</h1> 
                    
                </div>
                <div className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900 p-5">
                    <p>Tổng hợp mẫu các dạng đề thi đánh giá năng lực dưới dạng trắc nghiệm online của các trường với ngân hàng câu hỏi và đề thi lớn giúp bạn chuẩn bị tốt cho kì thi ĐGNL.</p>
                </div>
                <div className="grid grid-cols-3 gap-3 justify-evenly px-16">
                    <button className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3  border-2 border-black hover:border-transparent rounded">
                    Đề Thi ĐGNL ĐHQG Hà Nội</button>
                    <button className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3  border-2 border-black hover:border-transparent rounded">
                    Đề Thi ĐGNL ĐHQG Hồ Chí Minhi</button>
                    <button className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3  border-2 border-black hover:border-transparent rounded">
                    Đề thi ĐGNL ĐHSP Hà Nội</button>
                    <button className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3  border-2 border-black hover:border-transparent rounded">
                    Đề Thi ĐGTD Bách Khoa</button>
                    <button className=" bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3  border-2 border-black hover:border-transparent rounded">
                    Đề Thi ĐGNL Bộ Công An</button>
                </div>
            
            </div>
        
            
        </div>
        
        
    </div>
  )
}
