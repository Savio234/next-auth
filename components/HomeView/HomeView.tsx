'use client';
import React from 'react';
import { Button } from '@/shared';
import styles from './HomeView.module.css'
import { useRouter } from 'next/navigation';

const HomeView = () => {
  const router = useRouter()
  return (
    <div className={`flex h-full flex-col items-center justify-center ${styles.wrapper}`}>
      <form className={`flex flex-col items-center justify-center ${styles.form}`}>
        <div className='flex flex-col items-center justify-center gap-2 mb-[1.6rem]'>
          <h1 className='text-[4rem] font-semibold text-black drop-shadow-md'>
            Auth
          </h1>
          <p className='text-black text-[1.6rem]'>
            A simple authentication service
          </p>
        </div>
        <Button onClick={() => router.push('/login')} className={`text-[2rem] p-[1.6rem] w-60 h-[4.5rem] ${styles.btn}`} variant='destructive' size='lg'>
          Sign in
        </Button>
      </form>
    </div>
  )
}

export default HomeView;