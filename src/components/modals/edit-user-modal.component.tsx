import { useState, useRef } from 'react'
import styled from 'styled-components'
import { User } from '../../interfaces/user-interface'
import { updateUser } from '../../services/firebase-service'
import { useEffect } from 'react'
import ModalInput from './modal-input.component'
import { MutableRefObject } from 'react'
import { clickOutsideListener } from '../../utils'

interface EditModalProps {
  isModalVisible: boolean
  user: User
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const EditUserModal: React.FC<EditModalProps> = ({
  isModalVisible,
  user,
  setIsModalVisible,
}) => {
  const modalRef: MutableRefObject<null | HTMLFormElement> = useRef(null)
  const [name, setName] = useState(user.name)
  const [lastName, setLastName] = useState(user.lastName)

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await updateUser({ id: user.id, name, lastName, setIsModalVisible })
  }

  useEffect(() => {
    document.addEventListener('mousedown', (event) =>
      clickOutsideListener(event, modalRef, setIsModalVisible)
    )

    return () => {
      document.removeEventListener('mousedown', (event) =>
        clickOutsideListener(event, modalRef, setIsModalVisible)
      )
    }
  }, [])

  return isModalVisible ? (
    <Form ref={modalRef} onSubmit={(event) => onFormSubmit(event)}>
      <ModalInput
        type='text'
        value={name}
        label='Name'
        onChange={(event) => setName(event.target.value)}
      />
      <ModalInput
        onChange={(event) => setLastName(event.target.value)}
        type='text'
        value={lastName}
        label='Last name'
      />

      <Button>Save changes</Button>
    </Form>
  ) : (
    <div></div>
  )
}

const Form = styled.form`
  width: 200px;
  height: 200px;
  background-color: darkOrange;
  z-index: 100;
  position: absolute;
  top: 24px;
  border-radius: 4px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.5) 0px 10px 10px;
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
    transform: translateY(-2px);
  }
`

export default EditUserModal
