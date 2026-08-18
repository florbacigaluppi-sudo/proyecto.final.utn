import { Header } from "./components/Header"
import { useState } from "react"




const App = () => {
    const  [text, setText]= useState ("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")

    const [excludeSpaces, setExcludeSpaces] = useState(false)

    const [limitCharacter, setLimitCharacter] = useState (false)

const character = excludeSpaces? text.replace(/\s/g,"").lenght : text.lenght
return <main>
    <Header/>
    <h2>Analize your text<br />in real-time </h2>
    <textarea 
    placeholder= "Ingrese su texto"
    onChange= {(e) => setText (e.target.value)}
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
        onChange={()=> setLimitCharacter (!limitCharacter)}></input>
        Set Character Limit</label>
        </div>
      

</main>
}

export { App }