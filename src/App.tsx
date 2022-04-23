import React from 'react'
import GlobalStyles from './global-styles'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { User } from './interfaces/user-interface'
import { useEffect } from 'react'
import { fetchUsers } from './services/firebase-service'
import CreateUsersForm from './components/forms/create-user-form.component'
import Table from './components/table/table.component'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUsers(setUsers)
  }, [])

  return (
    <Container>
      <GlobalStyles />
      <ToastContainer position='bottom-right' />

      <CreateUsersForm users={users} />

      {users.length === 0 && <Header>No users in the database...</Header>}
      {users.length > 0 && <Table users={users} />}
    </Container>
  )
}

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`

const Header = styled.h2`
  text-align: center;
  margin-top: 20px;
`

export default App
