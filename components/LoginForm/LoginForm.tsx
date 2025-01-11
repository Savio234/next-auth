'use client';
import React from 'react';
import { Button, CardWrapper, InputField } from '@/shared'
import { useValidateLogin } from '@/hooks';
import { FaExclamationTriangle } from 'react-icons/fa';

const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, submitForm } = useValidateLogin()
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel={`Don't have an account`}
      backButtonHref='/register' showSocial
    >
      <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4 mt-6'>
        <>
          <InputField register={register('email')} name='Email' label='Email' 
            placeholder='johndoe@email.com'
            inputClass={`${errors?.email && `border border-red-500`}`}
          />
          {errors?.email && (
            <div className='flex items-center gap-2'>
              <FaExclamationTriangle color='red' className='h-6 w-6 mb-1' />
              <p className='text-red-500 text-[1.6rem]'>{errors?.email?.message}</p>
            </div>
          )}
        </>
        <>
          <InputField register={register('password')} isPassword label='Password' 
            placeholder='Enter your password'
            inputClass={`${errors?.password && `border border-red-500`}`}
          />
          {errors?.password && (
            <div className='flex items-center gap-2'>
              <FaExclamationTriangle color='red' className='h-6 w-6 mb-1' />
              <p className='text-red-500 text-[1.6rem]'>{errors?.password?.message}</p>
            </div>
          )}
        </>
        {isSubmitting ? (
          <Button variant='ghost' type='button'
            className='text-[1.5rem] cursor-not-allowed mt-[2.5rem] mb-[1.5rem] rounded-2xl py-4 px-4 h-[4.5rem]' >
              Submit
          </Button>
        ) : (
          <Button variant='destructive' type='submit'
            className='text-[1.5rem] mt-[2.5rem] mb-[1.5rem] rounded-2xl py-4 px-4 h-[4.5rem]' >
              Submit
          </Button>
        )}
      </form>
    </CardWrapper>
  )
}

export default LoginForm