'use client'

import { useApi } from '@/utils'
import { Fragment, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { DetailsProps, MealsProps } from '@/types'
import { MealContext } from '@/context'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import Link from 'next/link'
const CustomForm = () => {
  const { meals, handleMealDetail, handleFavoriteClick, favorites }: any =
    useContext(MealContext)
  console.log(favorites)

  return (
    <>
      {meals?.map((meals: MealsProps) => (
        <div key={meals.idMeal} className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={meals?.strMealThumb}
              alt="/"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.content}>
            <h3>{meals.strMeal}</h3>
            <Link href={`details/${meals.idMeal}`}>
              <button onClick={() => handleMealDetail(meals.idMeal)}>Chi tiết</button>
            </Link>
          </div>
          <div className={styles.favourite} onClick={() => handleFavoriteClick(meals?.idMeal)}>
            {favorites.some((favorite: DetailsProps) => favorite.idMeal === meals?.idMeal) ? (
              <AiTwotoneHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default CustomForm
