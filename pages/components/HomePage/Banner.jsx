import React from 'react'
import style from '../Style/Banner.module.css'

export default function Banner() {
  const btn_banner = ['mt-8', 'text-center', 'text-white', 'rounded-md',  'duration-100', `${style.btn_banner}`]

  return (
    <div className='container mx-auto py-20'>
      <div className='grid grid-cols-2'>
        <div className="img_eco flex justify-center items-center">
          <img src="./img/logo2.png" className='w-3/6 my-10 mr-8' alt="logo-eco" />
        </div>
        <div className="eco-slogan ">
          <div className="text-center">
            <h1 className="text-7xl ">Eco Smart Solutions</h1>
            <h2 className="text-3xl my-7 font-semibold">Tôn trọng - Hiệu quả - Chuyên nghiệp</h2>
            <p className='text-2xl leading-10'>
              Tiên phong thực hiện sứ mệnh "Nâng tầm thương hiệu - thúc đẩy kinh doanh" trong hệ sinh thái các doanh nghiệp phát triển bền vững.
            </p>
              <button className={btn_banner.join(' ')}>
                <a href="#" className='font-bold text-base'>Đọc thêm<span className='duration-300'>↘</span></a>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
