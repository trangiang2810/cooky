'use client'

import styles from './style.module.scss'
import CustomForm from '../CustomForm'
import { BiSearch } from 'react-icons/bi'
import { useContext } from 'react'
import { MealContext } from '@/context'
import Categories from '../categories'
const Meals: React.FC = () => {
  const { handleSearch }: any = useContext(MealContext)
  return (
    <section className={styles.container}>
      <div className={styles.searchInput}>
        <input onChange={e => handleSearch(e)} type="text" placeholder="Tìm kiếm" />
        <BiSearch />
      </div>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.items}>
        <CustomForm />
      </div>
    </section>
  )
}

export default Meals
