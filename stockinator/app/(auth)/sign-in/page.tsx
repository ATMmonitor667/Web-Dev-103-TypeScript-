'use client'
import React from 'react'
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import InputForm from '@/components/InputForm';
import FooterLink from '@/components/FooterLink';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignInFormData) => {
    try{
      console.log('SignIn data', data);
    }
    catch(error)
    {
      console.log('SignIn error', error);
    }
  }

  return (
    <>
      <h1 className="form-title">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <InputForm
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          }}
        />

        <InputForm
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          }}
        />

        <Button type="submit" className="form-submit-button yellow-btn w-full mt-5" disabled={isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>
        <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up" />
      </form>
    </>
  )
}

export default SignIn