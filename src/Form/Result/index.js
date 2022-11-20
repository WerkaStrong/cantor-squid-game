const Result = ({ result }) => {
    return(
    <p className="form__result">Twój wynik: {<strong> {result.targetAmount}&nbsp;{result.currency}</strong>}
        
    </p>

)};

export default Result;