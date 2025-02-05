'use client';

import React from 'react';
import Heading from '@/components/heading/Heading';
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';
import styles from './EmptyState.module.scss';

interface IEmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = '일치하는 값이 없습니다.',
  subtitle = '일부 필터를 변경하거나 제거해 보십시오.',
  showReset
}: IEmptyStateProps) => {

  const router = useRouter();

  return (
    <div
      className={styles['wrapper']}
    >
      <Heading 
        center
        title={title}
        subtitle={subtitle}        
      />
      <div className={styles['btn']}>
        {showReset &&
          <Button
            onClick={() => router.push('/')}
            outline
          >모든 필터 제거</Button>
        }
      </div>
    </div>
  )
}

export default EmptyState