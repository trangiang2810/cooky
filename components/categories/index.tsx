import { MealContext } from '@/context'
import { CategoriesProps } from '@/types'
import React, { useContext } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
const Categories = () => {
  const { categories, handleCategoryFilter }: any = useContext(MealContext)

  return (
    <>
      {categories.map(
        ({
          idCategory,
          strCategory,
          strCategoryThumb,
          strCategoryDescription,
        }: CategoriesProps) => (
          <div
            className={styles.items}
            key={idCategory}
            onClick={() => handleCategoryFilter(strCategory)}
          >
            <div className={styles.thumb}>
              <Image
                src={strCategoryThumb}
                alt={strCategory}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2>{strCategory}</h2>
          </div>
        )
      )}
    </>
  )
}

export default Categories
