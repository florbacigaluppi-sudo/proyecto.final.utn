const Button = ({setShowAll, showAll}) => {
    return(
   <button className= "list-button" onClick={() => setShowAll(!showAll)}>
    {showAll ? "See less ↑" : "See more ↓"}
    </button>
    )
}

export { Button }