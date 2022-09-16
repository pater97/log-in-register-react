import imageGoogle from '../../assets/icons/google.svg';
import functionUtils from '../../utils/Utils';
//componenti funzionali
import Inputbox from '../ui/input/Inputbox'
import Button from '../ui/button/Button'
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import {useState} from 'react'
//css
import './loginPage.css'

function LoginPage(){
    const navigate = useNavigate();

    // stati di controllo errori input
    const [state, setState] = useState({
        emailValid: true,
        passwordValid: true
    })

    // funzione al press del log in
    function login(e) {
        // estrapolo valore input
        let emailInput = e.target.form[0].value
        let passwordInput = e.target.form[1].value
        // variabile satellite per il set state che controllano la validità degli input
        let emailValidation = functionUtils.checkValidString(emailInput);
        let passwordValidation = functionUtils.checkValidString(passwordInput);

        setState({
            emailValid: emailValidation,
            passwordValid: passwordValidation
        })


        if(passwordValidation && emailValidation){
            navigate('/Home',{state:{
                email: emailInput,
                password: passwordInput,
            }})
        }
        

    }
    // nasconde errori quando riclicco l'input
    function hiddenErrorMail(){
        setState({
            ...state,
            emailValid: true,
        })
    }

    function hiddenErrorPassword(){
        setState({
            ...state,
            passwordValid: true,
        })
    }

    function toFacebookLogin(){
        console.log("Login con Facebook")
    }
    function toGoogleLogin(){
        console.log("Login con Google")
    }

    return(
        <div className="loginContainer">

            <span className='loginTitle'>LOGIN</span>

            <form >
                {/* input email*/}
                <div className='inputDiv inputDivEmail'>
                    <Inputbox
                        type={'email'}
                        placeholder={'Email'}
                        classCss={'inputBox'}
                        callbackFocus={hiddenErrorMail}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="lnr lnr-envelope" aria-hidden="true"></i>
                    </span>
                    {
                        state.emailValid === false &&
                        <span className="emailError">
                            <label className='labelErrorEmail'>Valid email is required: ex@abc.xyz</label>
                        </span>
                    }
                </div>
                {/* input password */}
                <div className='inputDiv inputDivPassword'>
                    <Inputbox
                        type={'password'}
                        placeholder={'Password'}
                        classCss={'inputBox'}
                        callbackFocus={hiddenErrorPassword}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="lnr lnr-lock" aria-hidden="true"></i>
                    </span>
                    {
                        state.passwordValid === false &&
                        <span className="passwordError">
                            <label className='labelErrorPassword'>Password is required</label>
                        </span>
                    }
                </div>

                <div className="rememberMe">
                    <label className="inputCheckbox">Remember me
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>

                {/* bottone login */}
                <Inputbox
                    label={'LOGIN'}
                    type={'button'}
                    buttonFunction={login}
                    value={'LOGIN'}
                    classCss={'buttonDef'}
                />
            </form>

            <p className='loginWithP'>Or login with</p>
            
            <div className="loginWith">
                
                <Button
                    buttonClassCss={'btnLink'}
                    iconBtn={'fa-brands fa-square-facebook'}
                    classBtn={'btnFace'}
                    callbackClick={toFacebookLogin}
                />

                <Button
                    buttonClassCss={'btnLink'}
                    imageBtn={imageGoogle}
                    classBtn={'btnGoogle'}
                    callbackClick={toGoogleLogin}
                />

            </div>

            <footer>
                <p>Not a member? <Link to={'/Register'}>Sign up now</Link></p>
            </footer>
            
        </div>
    );
}

export default LoginPage;