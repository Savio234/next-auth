'use client';
import React from 'react';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, validLoginSchema } from '@/interface/auth';

const useValidateLogin = () => {
    const { register, handleSubmit, 
        formState: { errors, isSubmitting }, 
        reset, 
        watch, 
        setValue,
        setError,
        getValues
    } = useForm<LoginSchema>({
        resolver: zodResolver(validLoginSchema),
        // defaultValues: {
        //     email: '',
        //     password: ''
        // }
    });

    const submitForm = async (data: LoginSchema) => {
        console.log(data);
        await new Promise((resolve: any) => setTimeout(resolve, 2000))
        reset();
    }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitForm
  }
}

export default useValidateLogin