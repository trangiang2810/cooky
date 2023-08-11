'use client'

import React, { useContext } from 'react'
import { MealContext } from '@/context'
import Image from 'next/image'
import { AiTwotoneHeart } from 'react-icons/ai'
import styles from './style.module.scss'
import { DetailsProps } from '@/types'
const Detail: React.FC = () => {
  const { selectedMeal }: any = useContext(MealContext)

  return (
    <div className={styles.container}>
      <h1>{selectedMeal?.strMeal}</h1>
      <div className={styles.thumb}>
        <Image
          src={selectedMeal?.strMealThumb}
          alt={selectedMeal?.strMeal}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <div>
          <h2>Gaf aran</h2>
          <AiTwotoneHeart />
        </div>
        <div className={styles.ingredient_list}>
          <h3>Thành phần</h3>
          <div className={styles.ingredient_item}>
            <span>{selectedMeal?.strIngredient1}</span>
            <span>{selectedMeal?.strMeasure1}</span>
          </div>
        </div>
        <div className={styles.instructions}>
          <h3>Hướng dẫn thực hiện</h3>
          {selectedMeal?.strInstructions
            .split('\r\n')
            .map((instructions: string, index: number) => (
              <p key={index}>
                <span>Bước {index + 1}: </span>
                <span>{instructions}</span>
              </p>
            ))}
        </div>
        <div className={styles.youtobe}>
          <iframe
            src={selectedMeal?.strYoutube.replace('watch?v=', 'embed/')}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Detail
