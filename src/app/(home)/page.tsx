import React from 'react'
import Container from '@/components/container/Container'
import getProducts, { IProductsParams } from '../actions/getProducts';
import EmptyState from '@/components/emptyState/EmptyState';
import ProductCard from '@/components/products/ProductCard';
import getCurrentUser from '../actions/getCurrentUser';
import FloatingButton from '@/components/floatingButton/FloatingButton';
import styles from './Home.module.scss';
import Categories from '@/components/categories/Categories';
import Pagination from '@/components/pagination/Pagination';
import { PRODUCTS_PER_PAGE } from '@/constants';

interface IHomeProps {
  searchParams: IProductsParams;
}
const Home = async ({ searchParams }: IHomeProps) => {
  // pagination
  const page = searchParams?.page;
  const pageNum = typeof page === 'string' ? Number(page) : 1;
  // console.log('pageNum: ', pageNum);

  const products = await getProducts(searchParams);
  // console.log('@@@', products);

  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <Categories />
        {
          products?.data.length === 0
            ?
            <EmptyState showReset />
            :
            <>
              <div className={styles['product-card']}>
                {products.data.map((product) => (
                  <ProductCard
                    currentUser={currentUser}
                    key={product.id}
                    data={product}
                  />
                ))}
              </div>

              <Pagination page={pageNum} totalItems={products.totalItems} perPage={PRODUCTS_PER_PAGE} />

              <FloatingButton href='/admin/products/add'>+</FloatingButton>
            </>
        }
      </Container>
    </main>    
  )
}

export default Home