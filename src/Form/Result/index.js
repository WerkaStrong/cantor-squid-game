const Result = ({ result }) => {
    return(
    <p className="form__result">Twój wynik: {<strong> 
        {result.targetAmount}&nbsp;
        {result.currency ? result.currency : "N/A"}
        </strong>}
        
    </p>

)};

export default Result;