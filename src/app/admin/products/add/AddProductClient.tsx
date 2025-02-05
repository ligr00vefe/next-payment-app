'use client';
import Heading from '@/components/heading/Heading';
import Input from '@/components/input/Input';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './AddProduct.module.scss';
import Container from '@/components/container/Container';
import ImageUpload from '@/components/ImageUpload/ImageUpload';
import { categories } from '@/components/categories/Categories';
import CategoryInput from '@/components/categories/CategoryInput';
import Button from '@/components/button/Button';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddProductClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
            category: '',
            latitude: 33.5563,
            longitude: 126.79581,
            imageSrc: '',
            price: 1,
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('data: ', data);
        setIsLoading(true);

        axios.post('/api/products', data)
            .then((response) => {
                router.push(`/products/${response.data.id}`);
                reset();
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const imageSrc = watch('imageSrc');
    const category = watch('category');
    const latitude = watch('latitude');
    const longitude = watch('longitude');
    
    // defaultValues 업데이트용 함수
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value);
    }

    const KakaoMap = dynamic (() => import('../../../../components/kakaoMap/KakaoMap'), {
        ssr: false
    });
    
  return (
    <Container>
        <div className={styles['wrapper']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading 
                    title='Product Upload' 
                    subtitle='upload your product' 
                />

                <ImageUpload 
                    onChange={(value) => setCustomValue('imageSrc', value)}
                    value={imageSrc}
                />
                <hr />

                <Input
                    id='title'
                    label='Title'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />

                <Input
                    id='description'
                    label='Description'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />

                <Input
                    id='price'
                    label='Price'
                    formatPrice
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />

                <div className={styles['categories']}>
                    {categories.map((item) => (
                        <div key={item.label} className={styles['inner']}>
                            <CategoryInput 
                                onClick={(category) => setCustomValue('category', category)}
                                selected={category === item.path}
                                label={item.label}
                                icon={item.icon}
                                path={item.path}
                            />
                        </div>
                    ))}
                </div>
                <hr />

                <KakaoMap 
                    setCustomValue={setCustomValue} 
                    latitude={latitude} 
                    longitude={longitude} 
                />
                    
                <Button type='submit'>상품 생성하기</Button>
            </form>
        </div>        
    </Container>
  )
}

export default AddProductClient