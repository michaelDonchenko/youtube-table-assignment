import { db } from '../constants/firebase-config'
import {
  query,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore'
import { CreateUser, User, UpdateUser } from '../interfaces/user-interface'
import { toast } from 'react-toastify'

export const usersQuery = query(collection(db, 'users'))

export const fetchUsers = async (
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
) => {
  try {
    onSnapshot(usersQuery, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((user) => ({
          ...(user.data() as User),
          id: user.id,
        }))
      )
    })
  } catch (error) {
    console.log(error)
  }
}

export const createUser = async (args: CreateUser) => {
  const { id, name, lastName, users, resetFormFields } = args

  const idRegexCheck = /^\d+$/

  if (!id || !name || !lastName) {
    return toast.error('All fields required')
  }

  if (id.length !== 9 || !idRegexCheck.test(id)) {
    return toast.error('Wrong id format')
  }

  const isUserExists = users.find((user) => user.id === id)

  if (isUserExists) {
    toast.info('Id already exists')
    return
  }

  try {
    await setDoc(doc(db, 'users', id), {
      name: name,
      lastName: lastName,
    })

    resetFormFields()
    toast.success('User created succefully')
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id: string) => {
  const isConfirmed = window.confirm('Do you want to delete this user?')

  if (!isConfirmed) {
    return
  }

  try {
    await deleteDoc(doc(db, 'users', id))
    toast.success('User Deleted succefully')
  } catch (error) {
    console.log(error)
    toast.error('Could not delete the user')
  }
}

export const updateUser = async (args: UpdateUser) => {
  const { id, name, lastName, setIsModalVisible } = args
  try {
    await updateDoc(doc(db, 'users', id), {
      name,
      lastName,
    })

    toast.success('User updated succefully')
    setIsModalVisible(false)
  } catch (error) {
    console.log(error)
    toast.error('Could not update the user')
  }
}
