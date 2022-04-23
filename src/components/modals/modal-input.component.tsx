import React from 'react'
import styled from 'styled-components'

interface ModalInputProps {
  label?: string
  placeholder?: string
  value: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const ModalInput: React.FC<ModalInputProps> = ({
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
  justify-content: flex-start;
  margin-bottom: 15px;
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

export default ModalInput
