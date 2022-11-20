const Result = ({ result }) => (
    <p className="form__result">Twój wynik:
        <strong> {result.targetAmount}&nbsp;{result.currency}</strong>
    </p>

);

export default Result;