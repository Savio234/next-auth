'use client';
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, Socials } from '@/shared';
import styles from './CardWrapper.module.css'

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: any
    showSocial: boolean
}
const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial 
}: CardWrapperProps) => {
  return (
    <Card className={`${styles.card} w-[40rem] shadow-md`}>
        <CardHeader className='pt-0'>
            <div className='w-[100%] flex flex-col items-center justify-center py-6 px-0'>
                <h3 className='text-[3rem] font-semibold'>
                    Auth
                </h3>
                <p className='text-3xl text-muted-foreground'>
                    {headerLabel}
                </p>
            </div>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Socials />
            </CardFooter>
        )}
    </Card>
  )
}

export default CardWrapper