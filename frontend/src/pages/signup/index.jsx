import React, { useState } from 'react'
import Styles from './SignupPage.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { Button, Loader, TextInput, rem } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Modal } from '@mantine/core';
import { MuiOtpInput } from 'mui-one-time-password-input'
import axios from 'axios';
import Brand from '../../assets/brand';
import BackIcon from '../../components/backicon';
import { checkPasswordHealth } from '../../functions/formInputValidation';
import { BASE_URL } from '../../urls/auth';

const SignupPage = () => {

  const [ formData, setFormData ] = useState(null)
  const [ message, setMessage ] = useState('')
  const [ openedModal, setOpenedModal ] = useState(false);
  const [ otp, setOtp ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ checked, setChecked ] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  
  const navigate = useNavigate()

  const handleChange = (newValue) => {
    setOtp(newValue)
    setFormData({
      ...formData,
      ['otp']: newValue,
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailMatch = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const validPassword = checkPasswordHealth(formData?.password);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    

    if(formData == null){
      setLoading(false)
      alert("All fields are required!")
    } else {
      if(!formData?.email.match(emailMatch)) {
        setLoading(false)
        alert("Please, provide a valid email.")
      } else {
        if(!validPassword.isValid) {
          setLoading(false)
          alert(validPassword?.errors)
        } else {
          if(formData?.password !== formData?.confirmPassword){
            setLoading(false)
            alert("Password does not match.")
          } else {
            if(!checked){
              setLoading(false)
              alert("Please read our Tearms and Conditions!")
            } else {
              await axios.post('http://localhost:8000/api/v1/verify', formData)
              .then((response) => {
                setOpenedModal( prev => !prev )
                setMessage(response.data.message)
                setFormData({
                  ...formData,
                  ['token']: response.data.token
                })
                setLoading(false)
              })
              .catch((error) => {
                setLoading(false)
                // console.log(error);
                alert(error.message)
                setMessage(error.data.message)
              })
            }
          }
        }
      }
    }

  }

  const handleSubmit = async () => {

    await axios.post(`${BASE_URL}/signup`, formData, {
      headers: {
      'Authorization': `Bearer ${formData.token}`,
      'Accept': 'application/json'
    }
    })
    .then((response) => {
      alert(response?.data?.message)
      navigate("/dashboard-parent")
    })
    .catch((error) => {
      alert(error?.response?.data?.message)
    })
  }

  const mailIcon = <FiMail style={{ width: rem(12), height: rem(12) }} />;
  const lockIcon = <AiOutlineLock style={{ width: rem(12), height: rem(12) }} />;

  return (
    <section className={Styles.section}>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Create your parent account for free!</h1>

          {/* Modal for OTP authentication */}
          <Modal color='red' opened={openedModal} onClose={() => setOpenedModal(prev => !prev)} centered>
            <div className={Styles.modal}>
              <h3 className={Styles.title}>Account Confirmation</h3>
              <p>{message}</p>
              <p className={Styles.subTitle}>Enter otp to confirm account</p>
              <MuiOtpInput value={otp} sx={{my: 5}} length={6} onChange={handleChange} />
            </div>
              <Button onClick={handleSubmit} fullWidth>Submit</Button>
              <Button onClick={() => setOtp('')} className={Styles.clearButton} color="gray">Clear</Button>
          </Modal>

          <form className={Styles.formBox}>
            <div className={Styles.inputField}>
              <TextInput
                error={formData?.email && !formData?.email.match(emailMatch) ? "Invalid email" : null}
                size='md'
                required={true}
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
                error={formData?.password && !validPassword.isValid ? "Weak password" : null}
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Password"
                name='password'
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                error={formData?.confirmPassword && formData?.password !== formData?.confirmPassword ? "Passwords do not match" : null}
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}  
                placeholder="Confirm Password"
                name='confirmPassword'
                onChange={handleInputChange}
              />
            </div>

            <div className={Styles.terms}>
              <Checkbox 
                size="small" 
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span>By registering, you agree to the <Link className={Styles.link} to={'/'}>Terms of use</Link> and <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>

            <Button variant="filled" radius="md" disabled={loading ? true : false} onClick={    handleFormSubmit}>{loading ? <Loader color="blue" size="sm" /> : 'Create an account'}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignupPage