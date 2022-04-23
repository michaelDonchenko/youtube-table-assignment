export interface User {
  id: string
  name: string
  lastName: string
}

export interface CreateUser {
  users: User[]
  id: string
  name: string
  lastName: string
  resetFormFields: () => void
}

export interface UpdateUser {
  id: string
  name: string
  lastName: string
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
