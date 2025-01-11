import React from 'react';
import { Button, CardWrapper, InputField } from '@/shared'
import { useValidateLogin } from '@/hooks';

const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, submitForm } = useValidateLogin()
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel={`Don't have an account`}
      backButtonHref='/register' showSocial
    >
      {/* <h3 className='text-[1.6rem]'>Login Form</h3> */}
      <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4 mt-6'>
        <>
          <InputField register={register('email')} name='Email' label='Email' 
            placeholder='johndoe@email.com'
            inputClass={`${errors?.email && `border border-red-500`}`}
          />
          {errors?.email && (
            <p className='text-red-500'>{errors?.email?.message}</p>
          )}
        </>
        <>
          <InputField register={register('password')} isPassword label='Password' 
            placeholder='Enter your password'
            inputClass={`${errors?.password && `border border-red-500`}`}
          />
          {errors?.password && (
            <p className='text-red-500'>{errors?.password?.message}</p>
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