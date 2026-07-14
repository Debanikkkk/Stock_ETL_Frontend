import './LoginPage.css'
import LoginBox from '../../components/LoginBox/LoginBox'

type LoginPageProps = {
    onLogin: () => void
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    return (
        <main className="login-page">
            <div className="login-page__glow login-page__glow--one" />
            <div className="login-page__glow login-page__glow--two" />
            <LoginBox onLogin={onLogin} />
        </main>
    )
}

export default LoginPage