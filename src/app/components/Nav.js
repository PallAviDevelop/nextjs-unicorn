import Link from 'next/link'
import React from 'react'
import style from '@/app/styles/common.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <ul className={style.navList}>
        <li>
        <Link href='/'>Home</Link>
        </li>
        <li>
        <Link href='/product'>Product</Link>
        </li>
        <li>
        <Link href='/company'>Companyfreert</Link>
        </li>
        <li>
        <Link href='/becomeseller'>Become a seller</Link>
        </li>
        <li className="border-sky-300 border-2 p-2">
        <Link className="" href='/login'>Log In</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Nav