import React, { FC, useEffect, useState } from 'react'
import styles from './UnsplashCredit.module.css'

import PhotoTemplate from 'lib/unsplash/templates/PhotoTemplate'

import { UnsplashCreditProps } from './UnsplashCredit.d'

const UnsplashCredit: FC<UnsplashCreditProps> = (props: UnsplashCreditProps) => {
  const [photoInfo, updatePhotoInfo] = useState({ ...PhotoTemplate, ...props.photo })

  useEffect(() => {
    updatePhotoInfo({ ...PhotoTemplate, ...props.photo })
  }, [props.photo])

  return (
    <div className={styles.UnsplashCredit}>
      <span>Photo by <a href={photoInfo.user.links.html + '?utm_source=Serenity&utm_medium=referral'}>{photoInfo.user.first_name} {photoInfo.user.last_name}</a> on <a href="https://unsplash.com/?utm_source=Serenity&utm_medium=referral">Unsplash</a></span>
    </div>
  )
}

export default UnsplashCredit
