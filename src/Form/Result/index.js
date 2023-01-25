import { ResultField } from "./styled";

const Result = ({ result }) => {
    return(
    <ResultField>Twój wynik: {<strong> 
        {result} 
        </strong>}
    </ResultField>
)};

export default Result;