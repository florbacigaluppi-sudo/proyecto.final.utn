import { ProgressBar } from "./ProgressBar"


const LetterDensity = ({visibleLetters, sortLetters, showAll, setShowAll}) => {
    return( 
    <>
   
    <article>
         <h3>Letter Density</h3>
         <ul> {visibleLetters.map(letter => (
        <ProgressBar key={letter.letterName} letter={letter}></ProgressBar>
        ))}</ul>
        
    </article>


{sortLetters.length > 5 && (
    <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "See less ↑" : "See more ↓"}
    </button>
)}
    </>
     ) 
}
    

export { LetterDensity }