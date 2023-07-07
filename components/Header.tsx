import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <nav className='bg-white mt-3 mb-3'>
        <div className='flex justify-around'>
            <div>
            <Image
            className='md:cursor-pointer'
            src="https://hocthongminh.com/images/logo.svg"
            alt="logo"
            width={200}
            height={200}
            />
            </div>
            <button type="button" className="mx-96 inline-block bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">User</button>

            
        </div>
        <div className='flex font-medium justify-around bg-teal-600 p-3'>
            
                <ul className='md:flex md:items-center'>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>Luyện Thi THPT QG</Link>
                    </li>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>THCS</Link>
                    </li>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>THPT</Link>
                    </li>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>Đề thi ĐGNL</Link>
                    </li>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>Tài liệu</Link>
                    </li>
                    <li className='mx-4 text-white'>
                        <Link href="/" className='py-7 px-3 '>Kiến thức</Link>
                    </li>
                </ul>
        </div>


    </nav>
  )
}

export default Header
