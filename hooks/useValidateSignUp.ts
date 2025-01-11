import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { signUpFormSchema } from '@/interface/auth';
import { useForm } from 'react-hook-form';

type SignUpFormSchema = {
  email: string
  name: string
  password: string
  confirmPassword: string
}

const useValidateSignUp = () => {
  const { register, handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset, 
    watch, 
    setValue,
    setError,
    getValues
  } = useForm<SignUpFormSchema>({
    resolver: yupResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const submitForm = async (data: SignUpFormSchema) => {
    console.log(data);
    toast.success('Successfully signed up');
    await new Promise((resolve: any) => setTimeout(resolve, 1500));
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

export default useValidateSignUp