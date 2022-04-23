import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { User } from '../../interfaces/user-interface'
import { createUser } from '../../services/firebase-service'
import FormInput from './form-input.component'

const CreateUsersForm: React.FC<{ users: User[] }> = ({ users }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const resetFormFields = () => {
    setId('')
    setName('')
    setLastName('')
  }

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await createUser({ id, lastName, name, resetFormFields, users })
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      <FormInput
        type='text'
        value={id}
        label='Id'
        placeholder='Your id'
        onChange={(event) => setId(event.target.value)}
      />

      <FormInput
        type='text'
        value={name}
        label='Name'
        placeholder='Your name'
        onChange={(event) => setName(event.target.value)}
      />

      <FormInput
        type='text'
        value={lastName}
        label='Last name'
        placeholder='Your lastname'
        onChange={(event) => setLastName(event.target.value)}
      />
      <FormControl>
        <Button type='submit'>Create new user</Button>
      </FormControl>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  width: 140px;
  color: white;
  background-color: steelblue;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 25px;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`

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

export default CreateUsersForm
