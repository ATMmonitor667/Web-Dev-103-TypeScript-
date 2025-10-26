import React from 'react'
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const InputForm = ({name, label, placeholder, type = "text", register, error, validation, disabled, value}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label block">
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn('form-input w-full', error && 'border-red-500 focus:border-red-500! focus:ring-red-500/20')}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  )
}

export default InputForm