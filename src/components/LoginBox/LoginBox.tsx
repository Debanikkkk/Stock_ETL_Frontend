import { type FormEvent } from 'react'
import './LoginBox.css'

type LoginBoxProps = {
    onLogin: () => void
}

const LoginBox = ({ onLogin }: LoginBoxProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onLogin()
    }

    return (
        <section className="login-box" aria-label="Login form">
            <div className="login-box__header">
                <p className="login-box__eyebrow">Welcome back</p>
                <h1 className="login-box__title">Sign in to your account</h1>
                <p className="login-box__subtitle">Access your workspace with your credentials.</p>
            </div>

            <form className="login-box__form" onSubmit={handleSubmit}>
                <div className="input-box">
                    <label className="input-title" htmlFor="username">Username</label>
                    <input className="input-field" type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="input-box">
                    <label className="input-title" htmlFor="password">Password</label>
                    <input className="input-field" type="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
        </section>
    )
}

export default LoginBox