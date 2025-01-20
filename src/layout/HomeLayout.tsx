// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Header } from "../components"
import { HomeComp } from "../pages/home"



const HomeLayout = () => {
  return (
    <Fragment>
      <Header />
      <HomeComp/>
    </Fragment>
  )
}

export default HomeLayout