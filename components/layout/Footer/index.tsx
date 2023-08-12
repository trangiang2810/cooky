import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import { AiFillHome, AiOutlineMail, AiFillPhone, AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_wrapper}>
        <div>
          <h3>LIÊN HỆ</h3>
          <ul>
            <li>
              <AiFillHome />
              Hai Bà Trưng, Hà Nội
            </li>
            <li>
              <AiFillPhone />
              Hotline: 0987.654.321 - 0123.456.789
            </li>
            <li>
              <AiOutlineMail />
              Email: acb@gmail.com
            </li>
            <li>
              <AiOutlineFacebook />
              Facebook:
              <a href="https://www.facebook.com/profile.php?id=100021358124881">trangiang</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>DANH MỤC</h3>
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/menu">Thực đơn</Link>
            </li>
            <li>
              <Link href="/news">Tin tức</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>FANPAGE</h3>
          <ul></ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <strong>Copyright 2023 @</strong>
      </div>
    </footer>
  )
}

export default Footer
