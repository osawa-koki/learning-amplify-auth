import React from 'react'
import { type AuthUser } from 'aws-amplify/auth'

interface Props {
  user: AuthUser
  signOut: () => void
}

export default function App (props: Props): React.JSX.Element {
  const { user, signOut } = props

  return (
    <>
    </>
  )
}
