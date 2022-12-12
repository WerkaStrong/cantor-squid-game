const Result = ({ result }) => {
    return(
    <p className="form__result">Twój wynik: {<strong> 
        {result.targetAmount ? result.targetAmount : "N/A"}&nbsp;
        </strong>}
        
    </p>

)};

export default Result;