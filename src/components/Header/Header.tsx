import './Header.css'

type HeaderProps = {
    onNavigate?: (to: 'home' | 'upload') => void
    isAuthenticated?: boolean
    onLogout?: () => void
}

const Header = ({ onNavigate, isAuthenticated, onLogout }: HeaderProps) => {
    return (
        <header className="header-box">
            <div className="brand-group">
                <div className="brand-mark">↗</div>
                <div>
                    <p className="brand-label">Northstar</p>
                    <span className="brand-subtitle">Portfolio analytics</span>
                </div>
            </div>
            <nav className="options-box" aria-label="Primary navigation">
                <a onClick={() => onNavigate?.('home')}>Overview</a>
                <a>Signals</a>
                <a>Settings</a>
                {isAuthenticated ? <a onClick={onLogout}>Logout</a> : <a>Login</a>}
            </nav>

            <nav className="tools-box" aria-label="Tools navigation">
                <a onClick={() => onNavigate?.('upload')}>RAG Upload</a>
            </nav>
        </header>
    )
}

export default Header