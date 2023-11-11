import React, { useState } from 'react'
import Styles from './SignupPage.module.css'
import Brand from '../../assets/brand';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { Select, TextInput, rem, Button } from '@mantine/core';
import classes from '../../css-modules/MantineInput.module.css';
import { PasswordInput } from '@mantine/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import BackIcon from '../../components/backicon';


const SignupPage = () => {

  const [ formData, setFormData ] = useState({})
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post('http://localhost:8000/api/v1/login', formData)
      .then((response) => {
        alert(response.data.message)
        navigate(`/dashboard-${value.toLowerCase()}`)
      })
      .catch((err) => {
        console.log(err);
        // alert("All fields are required")
      })

      
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userIcon = <FaRegUser style={{ width: rem(12), height: rem(12) }} />;
  const mailIcon = <FiMail style={{ width: rem(12), height: rem(12) }} />;
  const lockIcon = <AiOutlineLock style={{ width: rem(12), height: rem(12) }} />;

  return (
    <section className={Styles.section}>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Create your parent account !</h1>

          <form onSubmit={handleFormSubmit} className={Styles.formBox}>
            <div className={Styles.inputField}>
              <Select
                size='sm'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={userIcon}
                comboboxProps={{ withinPortal: true }}
                data={['Parent', 'Teacher']}
                placeholder="Role"
                classNames={classes}
                value={value} 
                onChange={setValue}
              />
            </div>
            <div className={Styles.inputField}>
              <TextInput
                size='sm'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={mailIcon}
                placeholder="Email"
                name='email'
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                size='sm'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Password"
                name='password'
                onChange={handleInputChange}
              />
            </div>

            <div className={Styles.forgotPasswordRow}>
              <FormControlLabel className={Styles.checkbox} control={<Checkbox defaultChecked />} label="Remeber me?" />
              <Link className={Styles.forgotPassword} to={'/'}>Forgot your password?</Link>
            </div>

            <Button variant="filled" radius="md">Create an account</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignupPage