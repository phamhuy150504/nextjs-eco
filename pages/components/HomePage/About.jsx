import React from 'react'
import style from '../Style/About.module.css'


export default function About() {
    const class_main = ['text-white', 'text-center',  'mb-10', `${style.about__bg}`]

    return (
        <div className={class_main.join(' ')}>
            <h1 className="text-center font-bold text-4xl pt-16">Sự khác biệt của Eco Smart Solutions</h1>
            <div className='grid grid-cols-3 py-24 px-14 gap-20'>
                <div className="banner_item ">
                    <span><i className="fa-solid fa-person-chalkboard text-7xl"/></span>
                    <div className="banner_item_heading mt-5 font-bold text-2xl">Chi phí tối ưu</div>
                    <div className="banner_item_content mt-1">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit...</div>
                </div>
                <div className="banner_item ">
                    <span><i className="fa-solid fa-person-chalkboard text-7xl" /></span>
                    <div className="banner_item_heading mt-5 font-bold text-2xl">Đội nhóm chuyên nghiệp</div>
                    <div className="banner_item_content mt-1">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit...</div>
                </div>
                <div className="banner_item ">
                    <span><i className="fa-solid fa-person-chalkboard text-7xl" /></span>
                    <div className="banner_item_heading mt-5 font-bold text-2xl">Sứ mệnh cao cả</div>
                    <div className="banner_item_content mt-1">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit...</div>
                </div>
            </div>
        </div>
    )
}
