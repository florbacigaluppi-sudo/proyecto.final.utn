const Stats = ({characters, words, sentences})=>{
    return (
    <div>
    <p>Total Characters {characters}</p>
    <p>Word Count {words}</p>
    <p>Sentence Count {sentences}</p>
    </div>
      
    )}

export { Stats }