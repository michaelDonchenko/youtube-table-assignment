import { User } from '../../interfaces/user-interface'
import styled from 'styled-components'
import { useState } from 'react'
import { deleteUser } from '../../services/firebase-service'
import EditUserModal from '../modals/edit-user-modal.component'

const TableBodyRow: React.FC<{ user: User }> = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <TR>
      <TD>{user.id}</TD>
      <TD>{user.name}</TD>
      <TD>{user.lastName}</TD>
      <TD>
        <EditButtonContainer>
          <EditUserModal
            user={user}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />

          <Button
            onClick={() => setIsModalVisible(!isModalVisible)}
            buttonType='update'
          >
            Edit
          </Button>
        </EditButtonContainer>
      </TD>
      <TD>
        <Button buttonType='delete' onClick={() => deleteUser(user.id)}>
          Delete
        </Button>
      </TD>
    </TR>
  )
}

const TR = styled.tr`
  background-color: steelblue;

  &:hover {
    background-color: #295e8c;
  }
`

const TD = styled.td`
  padding: 8px 10px;
  cursor: default;
`

const EditButtonContainer = styled.div`
  position: relative;
`

const Button = styled.button<{ buttonType: 'update' | 'delete' }>`
  width: 80px;
  color: white;
  background-color: ${(props) =>
    props.buttonType === 'update' ? 'darkOrange' : 'crimson'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 22px;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }
`

export default TableBodyRow
