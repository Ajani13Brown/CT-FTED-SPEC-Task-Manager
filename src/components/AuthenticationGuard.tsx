import React, { ReactNode } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

interface ComponentProps {
    component:ReactNode | any
}

const AuthenticationGuard = ({ component }: ComponentProps) => {
    const Component= withAuthenticationRequired(component, {
        onRedirecting: ()=> <div>Redirecing to Login...</div>
    })
    return <Component/>
}

export default AuthenticationGuard