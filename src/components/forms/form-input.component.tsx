import React from 'react'
import styled from 'styled-components'

interface FormInputProps {
  label?: string
  placeholder?: string
  value: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  type,
  value,
  label,
  placeholder,
}) => {
  return (
    <FormControl>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormControl>
  )
}

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 15px;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    align-items: center;
  }
`

const Label = styled.label`
  font-size: 16px;
`

const Input = styled.input`
  width: 140px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 300;
  border-radius: 4px;
  border: 1px solid lightgray;
  outline: none;
`

export default FormInput
