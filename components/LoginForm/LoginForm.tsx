import { Button, CardWrapper, InputField } from '@/shared'
import React from 'react'

const LoginForm = () => {
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel={`Don't have an account`}
      backButtonHref='/register' showSocial
    >
      {/* <h3 className='text-[1.6rem]'>Login Form</h3> */}
      <form className='flex flex-col gap-4 mt-6'>
        <InputField name='name' label='Name' placeholder='Enter your name' />
        <InputField name='Email' label='Email' placeholder='Enter your email' />
        <InputField isPassword label='Password' placeholder='Enter your password' />
        <Button variant='destructive' type='submit'
          className='text-[1.5rem] mt-[2.5rem] mb-[1.5rem] rounded-2xl py-4 px-4 h-[4.5rem]' >
          Submit
        </Button>
      </form>
    </CardWrapper>
  )
}

export default LoginForm