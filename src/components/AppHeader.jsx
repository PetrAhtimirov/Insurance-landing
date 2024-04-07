import headerLogo from '../images/header-logo.svg';

const appHeader = () => {
    return (
        <header>
            <div className="header__inner container">
                <img src={headerLogo} alt=""/>
            </div>
        </header>
    )
}

export default appHeader;