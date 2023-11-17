import React from 'react'
import { type AuthUser } from 'aws-amplify/auth'
import { Button, Table } from 'react-bootstrap'

interface Props {
  user: AuthUser
  signOut: () => void
}

export default function App (props: Props): React.JSX.Element {
  const { user, signOut } = props

  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.signInDetails?.loginId}</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Button variant='primary' onClick={signOut}>Sign Out</Button>
    </>
  )
}
