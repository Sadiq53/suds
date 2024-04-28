import React from 'react'
import Home from '../../components/feature/Home'
import Logout from '../../components/shared/Logout'
import OpenAcount from '../../components/feature/OpenAcount'


const AuthRoutes = [
  {
    path : 'home',
    element : <Home />
  },
  {
  path : 'open-account',
    element : <OpenAcount />
  },
  {
    path : 'logout',
    element : <Logout />
  },
]


export default AuthRoutes