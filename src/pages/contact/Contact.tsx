import  { Fragment } from 'react'
import ContactHead from './ContactHead'
import ContactForm from './ContactForm'
import { Helmet } from 'react-helmet-async'


const Contact = () => {
  return (
    <Fragment>

      <Helmet>
        <title>Contact Us | Sleat</title>
        <meta name="description" content="Contact our support team for assistance on getting started or making the most of your account." />
      </Helmet>

      <ContactHead />
      <ContactForm />
    </Fragment>
  )
}

export default Contact