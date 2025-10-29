import React from 'react'
import Link from 'next/link';
import Logo from '@/components/Logo';

const NotFoundPage = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32'>
       <div className='max-w-md w-full space-y-8'>
            <div className='text-center'>
                <Logo/>
                <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                    Looking for something?
                </h2>
                <p className='mt-2 text-sm text-gray-600'>
                    We are sorry. The Web address you entered is not a functioning page on our site.
                </p>
            </div>
            <div className='mt-8 space-y-6'>
                <div className='rounded-md shadow-md space-y-4'>
                    <Link href='/'
                        className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-shop-dark-green/80 hover:bg-shop-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazon0range-dark hoverEffect'>
                            Go to Shoptime home page
                    </Link>
                    <Link href='/help'
                        className='w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazon-blue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ringg-offset-2 focus:ring-amazon-blue'>
                           Help
                    </Link>
                </div>
            </div>
            <div className='mt-8 text-center'>
                <p className='text-sm text-gray-600'>
                    Need help? Visit the {" "}
                    <Link href='/'
                        className='font-medium text-black hover:text-dark-blue'>
                            Help section
                    </Link>{" "}
                    or{" "}
                    <Link href='/contact'
                    className='font-medium text-black hover:text-dark-blue'>
                        Contact us
                    </Link>
                </p>
            </div>
       </div>
    </div>
  )
}

export default NotFoundPage;
