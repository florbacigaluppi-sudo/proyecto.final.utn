const Controls = ({excludeSpaces, setExcludeSpaces, limitCharacter, handleLimitCharacterInput, limitCharacterValue, readingTime, setLimitCharacterValue})=>{
    return (
        <div className="options">
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
        {limitCharacter && <input className="input-limit-character"
        type="number"
        value={limitCharacterValue}
        onChange={(e)=> setLimitCharacterValue(e.target.value)}></input>}
        <div className="reading-time">
            <p>Aprox. reading time: &lt; {readingTime} min</p>
        </div>
    </div>
    )
}

export { Controls }