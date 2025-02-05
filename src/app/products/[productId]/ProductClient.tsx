'use client';
import React from 'react'
import styles from './Product.module.scss';
import { Product, User } from '@prisma/client';
import Container from '@/components/container/Container';
import ProductHead from '@/components/products/ProductHead';
import ProductInfo from '@/components/products/ProductInfo';
import Button from '@/components/button/Button';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { categories } from '@/components/categories/Categories';

interface IProductClientProps {
  product: Product & { user: User }
  currentUser?: User | null;
}

const ProductClient = ({ product, currentUser }: IProductClientProps) => {
  const router = useRouter();
  const KakaoMap = dynamic(() => import('../../../components/kakaoMap/KakaoMap'), {
    ssr: false
  });

  const category = categories.find((item) => item.path === product.category)

  return (
    <Container>
      <div className={styles['product-wrapper']}>
        <div className={styles['content']}>
          <ProductHead
            id={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            currentUser={currentUser}
          />
          <div className={styles['info']}>
            <ProductInfo
              user={product.user}
              category={category}
              descriptions={product.description}
              createdAt={product.createdAt}
            />

            <div>
              <KakaoMap
                detailPage
                latitude={product.latitude}
                longitude={product.longitude}
              />
            </div> 
          </div>
        </div>      
        {currentUser?.id !== product?.user?.id && 
          <div className={styles['btn']}>
            <Button>
              장바구니에 담기
            </Button>
          </div>
        }
      </div>
    </Container>
  )
}

export default ProductClient