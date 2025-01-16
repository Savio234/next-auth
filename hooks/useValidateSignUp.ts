import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { signUpFormSchema } from '@/interface/auth';
import { useFieldArray, useForm } from 'react-hook-form';

type SignUpFormSchema = {
  email: string
  name: string
  password: string
  confirmPassword: string
}

const useValidateSignUp = () => {
  const { register, handleSubmit, unregister,
    formState: { errors, isSubmitting }, 
    reset,
    control,
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

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'phoneNumber',
  // })
  // const addPhoneNumber = () => append('')
  // const removePhoneNumber = (index: number) => remove(index)

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