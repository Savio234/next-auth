import { CardWrapper } from '@/shared'
import React from 'react'

const LoginForm = () => {
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel={`Don't have an account`}
    backButtonHref='/auth/register' showSocial
    >
        Login Form
    </CardWrapper>
  )
}

export default LoginForm