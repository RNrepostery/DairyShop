import React from 'react'
import DynamicMetaTag from '../components/DynamicMetaTag'
import Layout from "../components/Layout";

function Policy() {
  return (
   <Layout>
    <DynamicMetaTag
        title="Policy & Privacy Page"
        description="This is the Policy & Privacypage of our website."
        author="Hitechnofy"
        keyword="React, SEO, Meta Tags"
      />
    <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
   </Layout>
  )
}

export default Policy
