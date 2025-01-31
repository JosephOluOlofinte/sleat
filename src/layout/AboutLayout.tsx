import { Fragment } from 'react'

import { Footer, Header } from '../components'
import AboutComp from '../pages/about/AboutComp'

const AboutLayout = () => {
  return (
    <Fragment>
        <Header />
        <AboutComp />
        <Footer />
    </Fragment>
  )
}

export default AboutLayout