import React, { forwardRef, useState } from 'react';
import './contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useContactStyles } from '../../hooks/styles';
import emailjs from '@emailjs/browser'

const ContactForm = forwardRef((props, ref) => {
  const classes = useContactStyles();
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true);
      emailjs.sendForm('service_x9o1vfx', 'template_a5k6slg', e.target, 'user_gktXR24xAQqWRZA5hlyPZ').then(res => {console.log(res)}).catch(err => console.log(err));
  };
  return (
    <section className="contactContainer" ref={ref}>
      <h1 className="section-Header">Contact</h1>
      <div className="formContainer">
        <p className="reachOutText">Please feel free to reach out!</p>
        <form
          target="_blank"
          onSubmit={handleSubmit}
          className={classes.root}
        >
          <TextField
            required
            margin="normal"
            type='email'
            name='email'
            label="email"
            variant="outlined"
          />
          <TextField 
            required 
            name="subject" 
            label="subject" 
            variant="outlined" 
            type='subject' 
            />
          <TextField
            required
            multiline
            rows={8}
            label="message"
            type='message'
            name='message'
            variant="outlined"
          />
          <Button disabled={submitted} type="submit" variant="outlined">
            Submit
          </Button>
        </form>
        <h4 className={submitted ? 'visible' : 'hidden'}>
          Thank you! I'll get back to you soon.
        </h4>
      </div>
    </section>
  );
});

export default ContactForm;




// import React, { useState, forwardRef } from 'react';
// import './contact.css';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { useContactStyles } from '../../hooks/styles';

// const FORM_ENDPOINT = 'https://public.herotofu.com/v1/60a19ce0-8878-11ec-9849-fb4467695b96';

// const ContactForm = forwardRef((props, ref) => {
//   const classes = useContactStyles();
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };
//   return (
//     <section className="contactContainer" ref={ref}>
//       <h1 className="section-Header">Contact</h1>
//       <div className="formContainer">
//         <p className="reachOutText">Please feel free to reach out!</p>
//         <form
//           action={FORM_ENDPOINT}
//           method="POST"
//           target="_blank"
//           onSubmit={handleSubmit}
//           className={classes.root}
//         >
//           <TextField
//             required
//             margin="normal"
//             type='email'
//             name='email'
//             label="email"
//             variant="outlined"
//           />
//           <TextField 
//             required 
//             name="subject" 
//             label="subject" 
//             variant="outlined" 
//             type='subject' 
//             />
//           <TextField
//             required
//             multiline
//             rows={8}
//             label="message"
//             type='message'
//             name='message'
//             variant="outlined"
//           />
//           <Button disabled={submitted} type="submit" variant="outlined">
//             Submit
//           </Button>
//         </form>
//         <h4 className={submitted ? 'visible' : 'hidden'}>
//           Thank you! I'll get back to you soon.
//         </h4>
//       </div>
//     </section>
//   );
// });

// export default ContactForm;
