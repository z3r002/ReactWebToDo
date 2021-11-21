import React from "react";
import './AuthPage.css'
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";


export const RegPage = inject('auth')(observer((props) => {
    const Input = (name, type='text') =>  <input value={props.auth.valuesAuth[name]} name={name} onChange={props.auth.setValues}
                                                 type={type} className='input'   placeholder={name}/>
    return (
        <>
            <form className='main'>
                <h1 className="form_title">Регистрация</h1>
                {Input('email' )}
                {Input('username')}
                {Input('password', 'password')}

                <button onClick={props.auth.sendReg} className="button">Зарегистрироваться</button>
                <NavLink className='new_account'  to='/login'>Уже есть аккаунт?</NavLink>

            </form>
        </>
    )
}));
