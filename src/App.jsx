import { Header } from "./components/Header"
import { useState } from "react"




const App = () => {
    const  [text, setText]= useState ("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")
    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = useState (false)
    const [limitCharacterValue, setLimitCharacterValue] = useState(300)
    const [showAll, setShowAll]= useState (false)

const characters = excludeSpaces? text.replace(/\s/g,"").length : text.length

const handleChangeTextarea = (e) => {
    const value = e.target.value


    if(limitCharacter){
        if (value.length<=limitCharacterValue){setText (value)}
    }
    else{    
    setText (value)}   
}

const handleLimitCharacterInput = () => {
    setLimitCharacter (!limitCharacter)
    const newText = text.slice(0, limitCharacterValue)
    setText(newText)}

const words = text.trim ()=== ""? 0 : text.trim().split(/\s+/).length

const sentences = text.trim ()=== ""? 0 : text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length

const readingTime = Math.ceil(words / 200)

const cleanText = text.toLowerCase().replace(/[^a-záéíóú]/g, "")
const totalLetters = cleanText.length
const dictionaryLetters = {}

cleanText.split("").forEach(letter=>{ dictionaryLetters [letter] = (dictionaryLetters [letter]  || 0) + 1  })

const letters = Object.entries(dictionaryLetters).map(dataLetter =>{
    const letter = dataLetter[0]
    const amountLetter = dataLetter [1]

    const renderLetters = {
    letterName: letter,
    amount: amountLetter,
    porcentage: amountLetter/totalLetters *100
}
return renderLetters
})
 const sortLetters = letters.sort((a,b) => b.amount - a.amount)

const visibleLetters = showAll ? sortLetters : sortLetters.slice(0,5)

return (
<main>
    <Header/>
    <h2>Analize your text<br />in real-time </h2>
    <textarea 
    placeholder= "Ingrese su texto"
    onChange= {handleChangeTextarea }
    value={text}
     ></textarea>
     <div>
        <label>
        <input 
        type="checkbox"
        checked= {excludeSpaces}
        onChange={()=>setExcludeSpaces(!excludeSpaces)}></input>
        Exclude Spaces</label>

         <label>
        <input 
        type="checkbox"
        checked= {limitCharacter}
        onChange={handleLimitCharacterInput}></input>
        Set Character Limit</label>
        {limitCharacter && <input 
        type="number"
        value={limitCharacterValue}
        onChange={(e)=> setLimitCharacterValue (e.target.value)}></input>}
        <div>
            <p>Aprox. reading time: &lt; {readingTime} min</p>
        </div>
    </div>
    <p>Total Characters {characters}</p>
    <p>Word Count {words}</p>
    <p>Sentence Count {sentences}</p>
 {totalLetters > 0 && (
    <article>
         <h3>Letter Density</h3>
         {visibleLetters.map(letter => (
        <div key={letter.letterName}>
        <span>{letter.letterName.toUpperCase()}</span>
        <meter min="0" max="100" value={letter.porcentage}></meter>
        <span>{letter.amount} {letter.porcentage.toFixed(0)}%</span>
        </div>
        ))}
    </article>
)}

{sortLetters.length > 5 && (
    <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "See less ↑" : "See more ↓"}
    </button>
)}
</main>
)}  

export { App }