const ProgressBar = ({letter}) =>{
    return(
        <li key={letter.letterName}>
        <span className="letter">{letter.letterName.toUpperCase()}</span>
        <meter className="bar" min="0" max="100" value={letter.porcentage}></meter>
        <span className="porcentage">{letter.amount} {letter.porcentage.toFixed(0)}%</span>
        </li>
    )
}

export { ProgressBar } 