import Image from 'next/image'
import errorImage from '../../public/images/error.jpg'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className='mt-3 flex flex-col items-center px-2'>
      <h1 className='my-2 text-2xl font-bold dark:text-white'>
        404 - Page not found
      </h1>

      <hr className='mx-5 my-2 bg-slate-950' />

      <Image
        src={errorImage}
        className='h-96 rounded-lg object-cover shadow-2xl'
        alt='error image'
      />

      <hr className='mx-5 my-2 bg-slate-950' />

      <Link
        href='/'
        className='my-5 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500'
      >
        Back to Home page
      </Link>
    </div>
  )
}
