import React from 'react'
import { Link } from 'react-router-dom'
import DynamicMetaTag from '../components/DynamicMetaTag'
import Layout from "../components/Layout";

function NotFound() {
  return (
   <Layout>
    <DynamicMetaTag
        title="Not found  Page"
        description="This is the Not found page of our website."
        author="Hitechnofy"
        keyword="React, SEO, Meta Tags"
      />
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
   </Layout>
  )
}

export default NotFound
