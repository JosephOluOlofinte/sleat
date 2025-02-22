// import React from 'react'

import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { Header } from "../components"

const AuthLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default AuthLayout