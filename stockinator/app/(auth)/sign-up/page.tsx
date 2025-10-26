'use client'
import React from 'react'
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import InputForm from '@/components/InputForm';
import SelectField from '@/components/SelectField';
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from '@/lib/constant';
import FooterLink from '@/components/FooterLink';
const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology'
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignUpFormData) => {
    try{
      console.log('SignUp data', data);
    }
    catch(error)
    {
      console.log('SignUp error', error);
    }
  }

  return (
    <>
      <h1 className="form-title">
        SignUp and Personalize
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <InputForm
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required' }}
        />

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
          placeholder="Enter a strong password"
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

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
        />

        <Button type="submit" className="form-submit-button yellow-btn w-full mt-5" disabled={isSubmitting}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <FooterLink text= "Already have an account?" linkText = "Sign in" href="/sign-in"></FooterLink>
      </form>
    </>
  )
}

export default SignUp