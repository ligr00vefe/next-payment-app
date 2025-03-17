'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../login/Auth.module.scss';
import LogoPath from '@/assets/colorful.svg';
import Loader from '@/components/loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/input/Input';
import axios from 'axios';
import Button from '@/components/button/Button';


const RegisterClient = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const { register, handleSubmit, setValue, getValues, formState: {
        errors
    } } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (body) => {
        setIsLoading(true);
    
        try {
          const { data } = await axios.post('/api/register', body);
          console.log('data', data);
          toast.success('등록 성공...');
          router.push('/login');
          
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
        //   console.log('error', error);
          toast.error(error.message);
        } finally {
          setIsLoading(false);
        }
    }

    const chkPassword = () => {
        const password = getValues('password');
        const cPassword = getValues('cPassword');

        if (password !== cPassword) {
            toast.error('비밀번호가 일치하지 않습니다.');
            setValue('password', '');
            setValue('cPassword', '');
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <section className={styles['auth-wrapper']}>
                <div className={styles['container']}>
                    <h1 className={styles['logo']}>
                        <Image priority src={LogoPath} alt="logo" width={247} />
                    </h1>

                    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles['inputBox']}>
                            <Input
                                id="email"
                                label="이메일"
                                type="email"
                                placeholder="이메일을 입력하세요."
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                        <div className={styles['inputBox']}>
                            <Input
                                id="name"
                                label="이름"
                                type="text"
                                placeholder="이름을 입력하세요."
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                        <div className={styles['inputBox']}>                            
                            <Input
                                id="password"
                                label="비밀번호"
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                        <div className={styles['inputBox']}>                            
                            <Input
                                id="cPassword"
                                label="비밀번호 확인"
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                onBlur={chkPassword}
                                required
                            />
                        </div>                    

                        <div className={styles['btnArea']}>
                            <Button className={styles['coloredBtn']} type="submit">
                                회원가입
                            </Button>   

                            <p className={styles['cancledBtn']}>가입된 계정이 있으신가요?
                                <Link href={'/login'}>
                                    로그인
                                </Link>
                            </p>                         
                        </div>                       
                    </form>
                </div>
            </section>
        </>
    );
};

export default RegisterClient;
