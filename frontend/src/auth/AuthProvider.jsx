import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN_KEY")
        
        if( !token ) {
            navigate("/login")
        }
    }, [])
    
    const token = localStorage.getItem("ACCESS_TOKEN_KEY")

  return token ? <>{children}</> : null;
}

export default AuthProvider