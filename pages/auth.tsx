import React from 'react'
import { Amplify } from 'aws-amplify'
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react'
import { withAuthenticator } from '@aws-amplify/ui-react'

import awsconfig from '../src/aws-exports'

Amplify.configure(awsconfig)

export function App ({ signOut, user }: WithAuthenticatorProps): React.JSX.Element {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(App)
