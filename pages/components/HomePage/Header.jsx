import React from 'react'
import Link from 'next/link'
import style from '../Style/Header.module.css'

export default function Header() {
  return (
    <nav className="bg-white h-full sm:px-4 py-1 w-full border-b-2 border-green-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
     <Link href='https://ecosmart.netlify.app/'>
            <img src="./img/logo2.png" className="w-16 h-16 mr-3  " alt="Eco-logo" />
     </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li className='pt-1'>
              <Link href='https://ecosmart.netlify.app/' className='text-xl'>Trang Chủ</Link>
              <span className='block  bg-green-700 h-0.5 mt-2  w-full'></span>
            </li >
            <li className='group/item pt-1'>
              <Link href='https://ecosmart.netlify.app/product/' className='text-xl'>Sản Phẩm</Link>
              <span className='block group-hover/item:w-full duration-200 bg-green-700 h-0.5 mt-2 invisible group/edit group-hover/item:visible w-0'></span>
            </li>
            <li className='group/item pt-1'>
              <Link href='https://ecosmart.netlify.app/activities/' className='text-xl'>Hoạt Động</Link>
              <span className='block group-hover/item:w-full duration-200 bg-green-700 h-0.5 mt-2 invisible group/edit group-hover/item:visible w-0'></span>
            </li>
            <li className='group/item pt-1'>
              <Link href='https://ecosmart.netlify.app/about-us/' className='text-xl'>Về Chúng Tôi</Link>
              <span className='block group-hover/item:w-full duration-200 bg-green-700 h-0.5 mt-2 invisible group/edit group-hover/item:visible w-0'></span>
            </li>
            <li className='group/item pt-1'>
              <Link href='https://ecosmart.netlify.app/contact-us/' className='text-xl'>Liên Hệ</Link>
              <span className='block group-hover/item:w-full duration-200 bg-green-700 h-0.5 mt-2 invisible group/edit group-hover/item:visible w-0'></span>
            </li>
            <li>
              <form className={style.search__navbar}>
                <input type="text" className={style.input__search_navbar} required/>
                <button>
                  <i className={style.fa__search_navbar + ' fa fa fa-search'} />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
