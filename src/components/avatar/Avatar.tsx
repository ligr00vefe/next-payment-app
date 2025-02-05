import React from 'react'
import Image from 'next/image';
import styles from './Avatar.module.scss';

interface IAvatarProps {
  src: string | null;
}

const Avatar = ({ src }: IAvatarProps) => {
  return (
    <>
      <Image
        className={styles['avatar']}
        width={30}
        height={30}
        alt='Avatar'
        src={src || 'https://via.placeholder.com/400x400?text=no+user+image'}
      />
    </>
  )
}

export default Avatar