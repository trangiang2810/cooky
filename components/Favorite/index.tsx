'use client'
import { MealContext } from '@/context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './style.module.scss'
const Favorite = () => {
  const { favorites }: any = useContext(MealContext)

  return (
    <div>
      {favorites.map((meal: any, index: number) => (
        <div key={index}>
          <Link href={`/details/${meal.strId}`}>
            <div>
              <Image src={meal.strMealThumb} alt={meal.strMeal} fill />
            </div>
            <div>
              <h2>{meal.strMeal}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Favorite
