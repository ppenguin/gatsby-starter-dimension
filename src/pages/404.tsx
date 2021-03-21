import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = (props: PageProps) => (
  <Layout {...props}> {/* pass props because in Layout {children,location} are used */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
