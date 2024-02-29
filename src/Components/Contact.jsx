import React from 'react'
import NavBar from './NavBar'

const Contact = () => {
  return (
    <div>
      <div className="text-sky-700 h-screen container mx-auto bg-sky-100 text-center justify-center pt-28">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have questions or need assistance? Reach out to our support team. We're here to help!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
          <p>
            For general inquiries and support, please contact our customer support team.
          </p>
          <p className="mt-4 ">
            Email: <a className='hover:underline' href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
          <p>
            For business-related inquiries and partnerships, please contact our business team.
          </p>
          <p className="mt-4 ">
            Email: <a className='hover:underline' href="mailto:business@example.com">business@example.com</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact