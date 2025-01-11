'use client';
import React from 'react'
import { Button, Card, CardContent, CardFooter, CardHeader, Socials } from '@/shared';
import Link from 'next/link';
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
    <Card className={`${styles.card} w-[45rem] pt-[1rem] px-[1.6rem] pb-[2.5rem] rounded-3xl shadow-md`}>
        <CardHeader className='pt-0'>
            <div className='w-[100%] flex flex-col items-center justify-center py-6 px-0'>
                <h3 className='text-[3rem] font-semibold'>
                    Login
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
        <CardFooter>
            <Button variant='link' className='font-normal max-w-fit mx-auto text-[1.25rem]
                hover:text-red-500' size='sm' asChild
            >
                <Link href={backButtonHref}>
                    {backButtonLabel}
                </Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper