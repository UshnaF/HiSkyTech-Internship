


// import React, { useState } from 'react';
// import Lottie from 'lottie-react';
// import animation from '../animation/anim.json';
// import { useForm, ValidationError } from '@formspree/react';

// const ContactForm = () => {
    
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, email, message } = formData;

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
//         if (!name || !email || !message) {
//             alert('Please fill out all fields to submit the message.');
//         }else if (!emailRegex.test(email)) {
//             alert('Please enter a valid email address.');
//         }  else {
//             setIsSubmitted(true);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="grid">
//                 <div className="card">
//                     <Lottie animationData={animation} className="anim"></Lottie>
//                 </div>
//                 <div className="form">
//                     <h1>Get in touch</h1>
//                     {isSubmitted ? (
//                         <p>Your message has been sent.</p>
//                     ) : (
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <input
//                                     className="input"
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     placeholder="Enter Name"
//                                     required
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     className="input"
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     required
//                                     placeholder="Enter Email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <textarea
//                                     className="input"
//                                     id="message"
//                                     name="message"
//                                     placeholder="Enter Message"
//                                     required
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                 ></textarea>
//                             </div>
//                             <div>
//                                 <button type="submit" >Submit</button>
//                             </div>
//                         </form>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;



















import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animation from '../animation/anim.json';
import submit from '../animation/submitAnim.json';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [state, handleSubmit] = useForm("xzzprzjb"); // Replace with your Formspree ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    if (state.succeeded) {
        return <div>

        <Lottie animationData={submit} className='anim'></Lottie>
        <h2>Your message has been sent.</h2>;

        </div>
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="card">
                    <Lottie animationData={animation} className="anim"></Lottie>
                </div>
                <div className="form">
                    <h1>Get in touch</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="input"
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <textarea
                                className="input"
                                id="message"
                                name="message"
                                placeholder="Enter Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
