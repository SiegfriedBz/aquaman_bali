import Head from 'next/head'
import Link from 'next/link'

const meta = {
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Best surf shots',
}

const GalleryLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <div id='gallery' className='justify-bewteen flex flex-col items-center'>
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            Gallery
          </span>
        </div>

        <nav
          id='gallery-navigation'
          className='mb-5 flex items-center space-x-8 text-xl font-bold dark:text-white'
          aria-label='gallery-navigation'
        >
          <Link href='/gallery'>Images</Link>

          <Link href='/gallery/videos'>Videos</Link>
        </nav>

        {children}
      </div>
    </>
  )
}

export default GalleryLayout
