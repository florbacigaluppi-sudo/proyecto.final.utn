const ProgressBar = ({letter}) =>{
    return(
        <li key={letter.letterName}>
        <span>{letter.letterName.toUpperCase()}</span>
        <meter min="0" max="100" value={letter.porcentage}></meter>
        <span>{letter.amount} {letter.porcentage.toFixed(0)}%</span>
        </li>
    )
}

export { ProgressBar } 