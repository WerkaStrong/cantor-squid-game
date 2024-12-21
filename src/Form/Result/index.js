import { ResultField } from './styled';

const Result = ({ result }) => {
    return <ResultField>Your result: {<strong>{result}</strong>}</ResultField>;
};

export default Result;
