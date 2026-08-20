const WriteArea =({handleChangeTextarea, text}) => {
    return <textarea className="writearea"
    placeholder= "Ingrese su texto"
    onChange= {handleChangeTextarea }
    value={text}
     ></textarea>
}


export { WriteArea }