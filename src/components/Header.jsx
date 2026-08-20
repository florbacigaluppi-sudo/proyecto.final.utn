const Header = ({dark, handleDarkTheme}) =>{
    return <header className="header">
        <div className="header-logo">
            <p>C</p>
            <h1>Character Counter</h1>
        </div>
        <button className={`header-switch ${dark ? "dark" : "light"}`} onClick={()=> handleDarkTheme(!dark)}>☀</button>

    </header>
}


export { Header }