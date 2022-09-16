import Inputbox from '../../components/ui/input/Inputbox';
import './registrationScreen.css'
//utils
import functionUtils from '../../utils/Utils';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

let obj = {}

function Register() {
    const navigate = useNavigate()

    // stati per verifcare gli errori
    const [state, setState] = useState({
        userNameValid: true,
        userSurnameValid: true,
        emailValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
        checkPolicy: true,
    })

    // funzione al click di register
    function Registration(e) {

        // estrapolo i valori degli input
        const userName = e.target.form[0].value
        const userSurname = e.target.form[1].value
        const job = e.target.form[2]?.value
        const telephoneNumber = e.target.form[3]?.value
        const email = e.target.form[4].value
        const password = e.target.form[5].value
        const confirmPassword = e.target.form[6].value
        const checkedPolicy = e.target.form[7].checked


        // variabili satellite per il set state che controllano la validità degli input
        let userNameValidation = functionUtils.checkValidString(userName);
        let userSurnameValidation = functionUtils.checkValidString(userSurname);
        let telephoneNumberValidation = functionUtils.checkValidTelephone(telephoneNumber)
        let emailValidation = functionUtils.checkValidEmail(email);
        let passwordValidation = functionUtils.checkValidString(password);
        let confirmPasswordValidation = functionUtils.checkValidPassword(password, confirmPassword);

        // setta gli stati se ci sono stati errori o meno
        setState({
            userNameValid: userNameValidation,
            userSurnameValid: userSurnameValidation,
            telephoneNumberValid: telephoneNumberValidation,
            emailValid: emailValidation,
            passwordValid: passwordValidation,
            confirmPasswordValid: confirmPasswordValidation,
            checkPolicy: checkedPolicy,
        })

        if(userNameValidation  && userSurnameValidation && emailValidation && passwordValidation && confirmPasswordValidation && checkedPolicy){
            const obj = {
                name: userName,
                surname: userSurname,
                email: email,
                password:password
            }
            if(telephoneNumberValidation){
                obj.telephoneNumber = telephoneNumber
            }
            if(job.length > 0){
                obj.job = job
            }

            navigate('/Home',{state:obj})
        }
        
    }

    // nasconde errori quando riclicco l'input

    // nome
    function hiddenErrorName() {
        setState({
            ...state,
            userNameValid: true,
        })
    }
    // congome
    function hiddenErrorSurname() {
        setState({
            ...state,
            userSurnameValid: true,
        })
    }
    // telefono
    function hiddenErrorTelephoneNumber() {
        setState({
            ...state,
            telephoneNumberValid: true,
        })
    }
    // mail
    function hiddenErrorEmail() {
        setState({
            ...state,
            emailValid: true,
        })
    }
    // password
    function hiddenErrorPassword() {
        setState({
            ...state,
            passwordValid: true,
        })
    }
    // conferma password
    function hiddenErrorPasswordConfirm() {
        setState({
            ...state,
            confirmPasswordValid: true,
        })
    }
    
    return (
        <div className="registerContainer">

            <span className='registerTitle'>REGISTER</span>

            <form >
                {/* input nome*/}
                <div className='inputDiv inputDivEmail'>
                    <Inputbox
                        type={'text'}
                        placeholder={'Nome'}
                        classCss={'inputBox'}
                        buttonFunction={hiddenErrorName}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="fa-solid fa-user"></i>
                    </span>

                    {
                        state.userNameValid === false &&
                        <span className="emailError">
                            <label className='labelErrorEmail'>Insert Name</label>
                        </span>
                    }
                </div>
                {/* input cognome*/}
                <div className='inputDiv inputDivEmail'>
                    <Inputbox
                        type={'text'}
                        placeholder={'Cognome'}
                        classCss={'inputBox'}
                        buttonFunction={hiddenErrorSurname}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="fa-solid fa-user"></i>
                    </span>

                    {
                        state.userSurnameValid === false &&
                        <span className="emailError">
                            <label className='labelErrorEmail'>Insert Surname</label>
                        </span>
                    }
                </div>
                {/* select*/}
                <div className='inputDiv inputDivSelect'>
                    <select>
                        <option value=""></option>
                        <option value="dev">Dev</option>
                        <option value="hr">hr</option>
                        <option value="manager">Manager</option>
                    </select>
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                    </span>

                    {
                        state.userSurname === false &&
                        <span className="emailError">
                            <label className='labelErrorEmail'>Insert Surname</label>
                        </span>
                    }
                </div>
                {/* input telefono*/}
                <div className='inputDiv inputDivEmail'>
                    <Inputbox
                        type={'tel'}
                        placeholder={'Telefono'}
                        classCss={'inputBox'}
                        buttonFunction={hiddenErrorTelephoneNumber}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="fa-solid fa-phone"></i>
                    </span>

                    {
                        state.telephoneNumberValid === false &&
                        <span className="emailError">
                            <label className='labelErrorEmail'>Invalid Telephone Number</label>
                        </span>
                    }
                </div>
                {/* input email*/}
                <div className='inputDiv inputDivEmail'>
                    <Inputbox
                        type={'email'}
                        placeholder={'Email'}
                        classCss={'inputBox'}
                        buttonFunction={hiddenErrorEmail}
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
                        buttonFunction={hiddenErrorPassword}
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
                {/* input conferma password */}
                <div className='inputDiv inputDivPassword'>
                    <Inputbox
                        type={'password'}
                        placeholder={'Conferma Password'}
                        classCss={'inputBox'}
                        buttonFunction={hiddenErrorPasswordConfirm}
                    />
                    <span className="focus-inputBox"></span>
                    <span className="symbol-inputBox">
                        <i className="lnr lnr-lock" aria-hidden="true"></i>
                    </span>
                    {
                        state.confirmPasswordValid === false &&
                        <span className="passwordError">
                            <label className='labelErrorPassword'>Password don't match</label>
                        </span>
                    }
                </div>

                <div className="policy">
                    <label className="inputCheckbox">Presa visione policy
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    {
                        state.checkPolicy === false &&
                        <span className="policyError">
                            <label className='labelErrorEmail'>select the policy</label>
                        </span>
                    }
                    </label>
                </div>

                {/* bottone login */}
                <Inputbox
                    label={'REGISTER'}
                    type={'button'}
                    value={'REGISTER'}
                    classCss={'buttonDef'}
                    buttonFunction={Registration}
                />
            </form>
        </div>
    )
}

export default Register