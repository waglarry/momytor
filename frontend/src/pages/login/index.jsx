import React, { useState } from 'react'
import Styles from './Login.module.css'
import Brand from '../../assets/brand';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { Select, TextInput, rem, Button, Loader } from '@mantine/core';
import classes from '../../css-modules/MantineInput.module.css';
import { PasswordInput } from '@mantine/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import BackIcon from '../../components/backicon';
import * as yup from 'yup' 


const LoginPage = () => {

  const [ formData, setFormData ] = useState({})
  const [ value, setValue ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const userSchema = yup.object().shape({
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
  })

  const handleFormSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    let dataObject = {
      email: formData?.email,
      password: formData?.password,
    }

    const isValid = await userSchema.isValid(dataObject)

    if(isValid) {
      await axios.post('http://localhost:8000/api/v1/login', dataObject)
      .then((response) => {
        alert(response?.data?.message)

        // Navigate user to dashboard if succesfully logged in
        navigate(`/dashboard-${value.toLowerCase()}`)

        localStorage.setItem('ACCESS_TOKEN_KEY', response?.data?.token)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        alert(error.message)
      })
    } else {
      setLoading(false)
      alert('Email or Password is wrong!')
    }

      
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
      <div className={Styles.leftCol}>
        <h1>Stay Organized <br /> and Connected.</h1>
        <p>Effortlessly monitor your child’s  performance as you work with our user management system.</p>

        <div className={Styles.card}>
            <p>
            I enjoy using this application so much 
            that my kids are really performing so well in school.  I check this box to say yes.
            </p>
        </div>
      </div>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Sign In</h1>
          <p>Enter your credentials to access your account</p>

          <form onSubmit={handleFormSubmit} className={Styles.formBox}>
            <div className={Styles.inputField}>
              <Select
                size='md'
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
                size='md'
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
                size='md'
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

            <Button disabled={loading ? true : false} variant="filled" radius="md" onClick={handleFormSubmit}>{loading ? <Loader color="blue" size="sm" /> : 'Sign In'}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage