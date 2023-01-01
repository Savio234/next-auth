import React from 'react'
import styles from './layout.module.css'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='bg-[#FFFAF1] h-full flex flex-col items-center justify-center'>
      {children}
    </div>
  )
}

export default AuthLayout