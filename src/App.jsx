import { Header } from "./components/Header"
import { WriteArea } from "./components/WriteArea"
import { Controls } from "./components/Controls"
import { Stats } from "./components/Stats"
import { LetterDensity } from "./components/LetterDensity"
import { useState } from "react"
import { Button } from "./components/Button"
import "./index.css"




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
<main className="main">
    <Header className= "header"/>
    <h2>Analize your text<br />in real-time </h2>
    <WriteArea
    handleChangeTextarea= {handleChangeTextarea}
    text= {text}>
    </WriteArea>
     <Controls
     excludeSpaces = {excludeSpaces}
     setExcludeSpaces= {setExcludeSpaces}
     limitCharacter = {limitCharacter}
     handleLimitCharacterInput = {handleLimitCharacterInput}
     limitCharacterValue = {limitCharacterValue} 
     readingTime={readingTime}
     setLimitCharacterValue={setLimitCharacterValue}
     ></Controls>
     <Stats
    characters= {characters}
    words={words}
    sentences={sentences}>
     </Stats>
    
    
     {text && <LetterDensity
       sortLetters = {sortLetters}
       visibleLetters= {visibleLetters}
       showAll= {showAll}
       setShowAll= {setShowAll}>
    </LetterDensity>
    }
    {sortLetters.length > 5 && (
    <Button
    setShowAll={setShowAll}
    showAll= {showAll}>
    </Button>
)}
</main>
)}  

export { App }