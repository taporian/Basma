import React, { useState } from 'react'
import './register.css'
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { signUpUser } from '../../redux/action-creators';
import { ErrorPForm } from '../../components/form/Form.styled';
import  ReCAPTCHA from "react-google-recaptcha";
import config from '../../components/config';

export default function Register() {
	const dispatch = useDispatch();
	const [data,setData]=useState();

	const { error } = useSelector((state) => state.authenticationReducer);
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required().matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		  ),
		last_name: yup.string().required(),
		name: yup.string().required(),
       
      })
    
      const {
        register,
        handleSubmit,
		reset,
        formState: { errors },
       
      } = useForm({ resolver: yupResolver(schema) });
  
      const onSubmit = (d) =>{
			const result = {
					...d,
					recaptcha_token:data,
			}
		
         dispatch(signUpUser(result));
		 setData('');
		 reset();
      }

   
    return (
       <>
    
       <div className="container">
       
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit(onSubmit)}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Name"  {...register("name")}/>
					<ErrorPForm>{errors.name?.message}</ErrorPForm>
        			<ErrorPForm>{error && error.name}</ErrorPForm> 
				</div>
			 
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Last Name"  {...register("last_name")}/>
					<ErrorPForm>{errors.last_name?.message}</ErrorPForm>
        			<ErrorPForm>{error && error.last_name}</ErrorPForm>  
				</div>
			
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email"  {...register("email")}/>
					<ErrorPForm>{errors.email?.message}</ErrorPForm>
        			<ErrorPForm>{error && error.email}</ErrorPForm>  
				</div>
				
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"  {...register("password")}/>
					<ErrorPForm>{errors.password?.message}</ErrorPForm>
        			<ErrorPForm>{error && error.password}</ErrorPForm>  
				</div>
		
			
				<button className="button login__submit">
					<span className="button__text">Register</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
							
			</form  >
			<center>

		
			<ReCAPTCHA
			sitekey={config.RECAPTCHA_SITEKEY}
			onChange={setData}
			/>
			{console.log('errors',error)}
			<ErrorPForm>{error?.message}</ErrorPForm>
            	</center>
		</div>
		
        
		<div className="screen__background">
			
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>
		<div className='social-icons'>
		<a className='social-account' href='/'>Back home</a>
		</div>	
	</div>

</div>

       </>
    )
}
