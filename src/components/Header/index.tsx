// import React from 'react'
import "./style.css"

export const Header = () => {
    return (
        <div>
            <ul className="top-menu">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Totorial</a>
                    <ul className='dropdown-first'>
                        <li><a href='#'>Thủ thuật</a></li>
                        <li><a href='#'>Kiến thức</a></li>
                        <li><a href='#'>Đồ họa</a>
                            <ul className='dropdown-second'>
                                <li><a href='#'>Audition</a></li>
                                <li><a href='#'>Illustrator</a></li>
                                <li><a href='#'>PhotoShop</a></li>
                                <li><a href='#'>After Effect</a></li>
                                <li><a href='#'>Premiere</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Lập trình</a></li>
                    </ul>
                </li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Login</a></li>
            </ul>

        </div>
    )
}
