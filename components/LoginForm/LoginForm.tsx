import { Button, CardWrapper, InputField } from '@/shared'
import React from 'react'

const LoginForm = () => {
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel={`Don't have an account`}
      backButtonHref='/auth/register' showSocial
    >
      Login Form
      <form className='flex flex-col gap-2'>
        <InputField name='name' label='Name' placeholder='Enter your ' />
        <InputField name='Email' label='email' placeholder='Enter your ' />
        <InputField label='' placeholder='Enter your ' />
        <Button type='submit'>
          Submit
        </Button>
      </form>
    </CardWrapper>
  )
}

export default LoginForm