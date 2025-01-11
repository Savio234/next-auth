'use client';
import React from 'react';
import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import styles from './HomeView.module.css'
import Link from 'next/link';

const HomeView = () => {
  const router = useRouter();
  return (
    <div className={`flex h-full flex-col items-center justify-center ${styles.wrapper}`}>
      <div className='bg-white w-[40rem] h-[40rem] flex flex-col justify-center 
        items-center rounded-2xl'
      >
        <form className={`flex flex-col items-center justify-center ${styles.form}`}>
          <div className='flex flex-col items-center justify-center gap-2 mb-[1.6rem]'>
            <h1 className='text-[4rem] font-semibold text-black drop-shadow-md'>
              Auth
            </h1>
            <p className='text-black text-center w-[30rem] text-[1.6rem]'>
              A simple authentication service using next auth
            </p>
          </div>
          <Link href='/login'>
            <Button variant='destructive' size='lg'
              className={`text-[2rem] p-[1.6rem] w-60 h-[4.5rem] ${styles.btn}`}
            >
              Sign in
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default HomeView;