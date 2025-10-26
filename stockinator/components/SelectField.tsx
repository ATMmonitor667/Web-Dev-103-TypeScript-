import React from 'react'
import { Controller } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectField = ({name, label, placeholder, options, control, error, required = false}: SelectFieldProps ) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label block">{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
        }}
        render={({field}) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className={cn('form-input w-full', error && 'border-red-500 focus:border-red-500! focus:ring-red-500/20')}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="z-50 bg-gray-800 border-gray-600">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-100 focus:bg-gray-700 focus:text-white cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  )
}

export default SelectField