import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
        <Helmet>
            <title>My App</title>
            <meta name="description" content="Welcome to my awesome app!" />
        </Helmet>

        <Header />
        <Outlet />
        <Footer />
    </Fragment>
  );
};

export default Layout