import React from 'react'
import Link from 'next/link';
import styles from './FloatingButton.module.scss';

interface IFloatingButtonProps {
  href: string;
  children: React.ReactNode;
}

const FloatingButton = ({
  href,
  children
}: IFloatingButtonProps) => {
  return (
    <Link 
      href={href}
      className={styles['floating-btn']}
    >
      {children}
    </Link>
  )
}

export default FloatingButton