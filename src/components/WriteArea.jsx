const WriteArea =({handleChangeTextarea, text}) => {
    return <textarea 
    placeholder= "Ingrese su texto"
    onChange= {handleChangeTextarea }
    value={text}
     ></textarea>
}


export { WriteArea }