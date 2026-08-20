const Stats = ({characters, words, sentences})=>{
    return (
    <div className="results">
    <article className="result1"><h3>{characters}</h3> <p>Total Characters</p></article>
    <article className="result2"><h3>{words}</h3><p>Word Count</p></article>
    <article className="result3"><h3>{sentences}</h3><p>Sentence Count</p></article>
    </div>
      
    )}

export { Stats }