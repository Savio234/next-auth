'use client';
import React from 'react'
import { Button } from '..';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import styles from './Socials.module.css'


const Socials = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button size='lg' className={`${styles.btn} h-[3.75rem] w-full`} variant='outline' onClick={() => ('')}>
        <FaGoogle color='red' className='h-10 w-10' />
      </Button>
      <Button size='lg' className={`${styles.btn} h-[3.75rem] w-full`} variant='outline' onClick={() => ('')}>
        <FaGithub className='h-10 w-10' />
      </Button>
    </div>
  )
}

export default Socials