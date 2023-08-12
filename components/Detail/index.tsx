'use client'

import React, { useContext } from 'react'
import { MealContext } from '@/context'
import Image from 'next/image'
import { AiTwotoneHeart } from 'react-icons/ai'
import styles from './style.module.scss'
import { DetailsProps } from '@/types'
const Detail: React.FC = () => {
  const { selectedMeal, handleFavoriteClick }: any = useContext(MealContext)

  return (
    <div className={styles.container}>
      <div className={styles.thumb}>
        <Image
          priority
          src={selectedMeal?.strMealThumb}
          alt={selectedMeal?.strMeal}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>{selectedMeal?.strMeal}</h1>
          <div className={styles.favourite}>
            <AiTwotoneHeart
              onClick={() => handleFavoriteClick(selectedMeal?.idMeal)}
              className={styles.icon}
            />
          </div>
        </div>

        <table className={styles.ingredient_list}>
          <thead>
            <tr>
              <th>Thành phần</th>
              <th className={styles.measure}>Lượng</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(index => {
              const ingredient = selectedMeal && selectedMeal[`strIngredient${index}`]
              const measure = selectedMeal && selectedMeal[`strMeasure${index}`]
              if (!ingredient) return null
              return (
                <tr key={index}>
                  <td className={styles.ingredient}>{ingredient}</td>
                  <td className={styles.measure}>{measure}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className={styles.instructions}>
          <h3>Hướng dẫn thực hiện</h3>
          <ol>
            {selectedMeal?.strInstructions
              .split('\r\n')
              .map((instruction: string, index: number) => (
                <li key={index}>- {instruction}</li>
              ))}
          </ol>
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
