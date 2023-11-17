import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'


const ContactMessage = () => {
    const emailRegex = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/)

    const [errorMessage, setErrorMessage] = useState ('')

    const form = useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object( {
            name: Yup.string()
                .required('Namn måste anges')
                .min(4, 'Namnet måste bestå av minst 4 tecken'),
            email: Yup.string()
                .required('Email måste anges')
                .matches(emailRegex, 'Du måste ange en giltig e-postadress'),
            message: Yup.string()
                .required('Meddelande bör anges')

        }),

        onSubmit: async (values, { resetForm }) => {
            const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(values)
            })
            if (result.status === 200){
                alert('Formuläret skickades framgångsrikt!');
                resetForm();
                } else {
                    setErrorMessage('Något gick fel vid skickandet av formuläret.');                     
                }
            
            console.log(values)

            
        }
    }) 

  return (
    <form onSubmit={form.handleSubmit} noValidate>
        <p className='errorMessage'>{errorMessage}</p>
        <div className="leave-message-boxes">
            <input type="text" id="name" name="name" placeholder="Name*" title="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
            <label className={form.touched.name && form.errors.name ? 'error' : ''}>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
        </div>
        <div className="leave-message-boxes">
            <input type="text" id="email" name="email" placeholder="Email*" title="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
            <label className={form.touched.email && form.errors.email ? 'error' : ''}>{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
        </div>
        <div className="leave-message-boxes">
            <textarea rows="5" cols="80" id="message" placeholder="Your Message*" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
            <label className={form.touched.message && form.errors.message ? 'error' : ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
        </div>

        <button className="btn-yellow" type='submit'>Send Message</button>
  </form>
  
  )
}

export default ContactMessage