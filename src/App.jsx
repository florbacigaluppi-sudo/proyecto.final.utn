import { Header } from "./components/Header"
import { useState } from "react"




const App = () => {
    const  [text, setText]= useState ("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")

    const [excludeSpaces, setExcludeSpaces] = useState(false)

    const [limitCharacter, setLimitCharacter] = useState (false)

    const [limitCharacterValue, setLimitCharacterValue] = useState(300)

const character = excludeSpaces? text.replace(/\s/g,"").lenght : text.lenght8

const handleChangeTextarea = (e) => {
    const value = e.target.value


    if(limitCharacter){
        if (value.lenght<=limitCharacterValue){setText (value)}
    }

    else{    
    setText (value)}
    
}

const handleLimitCharacterInput = () => {
    setLimitCharacter (!limitCharacter)
    const newText = text.slice(0, limitCharacterValue)
    setText(newText)}
return <main>
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
        </div>
      

</main>
}

export { App }