'use client';
import React from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '@/interface/auth';


const useValidateLogin = () => {
    const { register, handleSubmit, 
        formState: { errors, isSubmitting }, 
        reset, 
        watch, 
        setValue,
        setError,
        getValues
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting
  }
}

export default useValidateLogin