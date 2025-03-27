import React from 'react'
import './../../assets/styles/Contactus.scss'
import { useForm } from 'react-hook-form';
const Contactus = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        // Handle email submission logic here
    };
  return (
    <div>
      
    </div>
  )
}

export default Contactus
