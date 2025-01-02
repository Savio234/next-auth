'use client';
import React from 'react';
import { Button } from '@/shared';
import styles from './HomeView.module.css'

const HomeView = () => {
  return (
    <div className={styles.wrapper}>
      <Button variant='destructive'>
        Click me
      </Button>
    </div>
  )
}

export default HomeView;