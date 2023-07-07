import Image from 'next/image'
import banner from '../../public/new-banner.webp'

export default function Banner() {
  return (
    <div>
      <div style={{height: '620px', overflow: 'hidden'}}>
        <Image
        className=''
        src={banner}
        alt="banner"
        width={0}
        height={900}
        style={{ width: '100%', height:'auto'}} // optional
        /> 
      </div>
      <div className='py-8 px-4 text-center'>
        <h1 className='mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white'>Luyện tập trắc nghiệm online tại Học Thông Minh</h1>
        <p className='mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900'>Làm trắc nghiệm online các môn Toán, Lý, Hóa, Sinh, Sử, Địa, GDCD, Tiếng Anh, Văn với các bài luyện tập theo chương trình học và đề thi học kì, giữa kì, ... có đáp án, lời giải chi tiết.</p>
      </div>
    </div>
  )
}
