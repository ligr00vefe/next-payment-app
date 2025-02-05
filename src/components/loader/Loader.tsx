'use client'
import React from 'react';
import styles from './Loader.module.scss';
import { RotatingSquare } from 'react-loader-spinner';

interface ILoaderProps {
    basic?: boolean;
}

const Loader = ({ basic }: ILoaderProps) => {
    if (basic) {
        return (
            <div className={styles['basic-wrapper']}>
                <RotatingSquare
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="rotating-square-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        );
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['loader']}>
                <RotatingSquare
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="rotating-square-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    );
};

export default Loader;
