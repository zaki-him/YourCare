import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id='contact' className='py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <span className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            Get In Touch
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Get Our Updates
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto text-base md:text-lg'>
            Subscribe to our newsletter for the latest news and updates. Have a question? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-white rounded-3xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Contact Information</h3>
              
              <div className='space-y-6'>
                {/* Phone */}
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 p-3 rounded-xl flex-shrink-0'>
                    <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'/>
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Phone</h4>
                    <p className='text-gray-600'>+1 (555) 123-4567</p>
                    <p className='text-gray-600'>+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 p-3 rounded-xl flex-shrink-0'>
                    <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-gray-600'>info@youcare.com</p>
                    <p className='text-gray-600'>support@youcare.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 p-3 rounded-xl flex-shrink-0'>
                    <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Address</h4>
                    <p className='text-gray-600'>123 Healthcare Avenue,<br/>Medical District, CA 90210</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 p-3 rounded-xl flex-shrink-0'>
                    <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd'/>
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Working Hours</h4>
                    <p className='text-gray-600'>Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className='text-gray-600'>Sat - Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className='mt-8 pt-8 border-t border-gray-200'>
                <h4 className='font-semibold text-gray-900 mb-4'>Follow Us</h4>
                <div className='flex gap-3'>
                  <a href='#' className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                    </svg>
                  </a>
                  <a href='#' className='bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                    </svg>
                  </a>
                  <a href='#' className='bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                    </svg>
                  </a>
                  <a href='#' className='bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-3xl p-8 shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                  placeholder='John Doe'
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                  placeholder='john@example.com'
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                  placeholder='+1 (555) 123-4567'
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                  Subject *
                </label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                >
                  <option value=''>Select a subject</option>
                  <option value='appointment'>Book an Appointment</option>
                  <option value='inquiry'>General Inquiry</option>
                  <option value='support'>Technical Support</option>
                  <option value='feedback'>Feedback</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none'
                  placeholder='Tell us how we can help you...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-300 flex items-center justify-center gap-2'
              >
                Send Message
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3'/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white'>
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>Subscribe to Our Newsletter</h3>
          <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
            Stay updated with the latest health tips, news, and special offers delivered straight to your inbox.
          </p>
          <form className='flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 bg-white px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/50'
            />
            <button
              onClick={() => {toast.success('Successfully subscribed!');}}
              className='bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact