import useDataRates from './useDataRates';
import Result from './Result';
import { useEffect, useState } from 'react';
import {
    Fieldset,
    Paragraph,
    Span,
    Select,
    Input,
    Loading,
    Failure,
    Button,
} from './styled';

export const Form = () => {
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('N/A');
    const [srcCurrency, setSrcCurrency] = useState('PLN');
    const [destCurrency, setDestCurrency] = useState('KRW');
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [date, setDate] = useState(null);
    const rates = useDataRates();

    useEffect(() => {
        const currencyOpts = ['PLN', 'KRW', 'EUR', 'USD'];
        setCurrencyOptions(currencyOpts);
        setDate(rates.date);

        const valueOtherThanSrc = currencyOptions.find(
            (item) => item !== srcCurrency
        );

        if (srcCurrency === destCurrency) {
            setDestCurrency(valueOtherThanSrc);
        }
    }, [srcCurrency, destCurrency, rates]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const resetResult = () => {
        setResult('N/A');
        setAmount('');
        setSrcCurrency('PLN');
        setDestCurrency('KRW');
    };

    const calculateResult = () => {
        if (rates) {
            const srcRate = rates.rates[srcCurrency];
            const destRate = rates.rates[destCurrency];
            const convertedAmount = ((amount / srcRate) * destRate).toFixed(4);
            setResult(`${convertedAmount} ${destCurrency}`);
        }
    };

    return (
        <form
            onSubmit={onFormSubmit}
            onReset={resetResult}
            className="form"
            method="get"
        >
            {rates.status === 'loading' ? (
                <Loading>
                    Hey, data is being fetched, it will take a moment 😉
                </Loading>
            ) : rates.status === 'error' ? (
                <Failure>
                    Something went wrong, check your internet connection or come
                    back later
                </Failure>
            ) : (
                <>
                    <Fieldset>
                        <legend className="form__legend">
                            Convert {srcCurrency} to {destCurrency}
                        </legend>
                        <Paragraph>
                            <Span>Select the source currency</Span>
                            <Select
                                id="srcCurrency"
                                value={srcCurrency}
                                onChange={({ target }) => {
                                    setSrcCurrency(target.value);
                                }}
                            >
                                {currencyOptions.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Select>
                            <label>
                                <Span>Select the target currency</Span>
                                <Select
                                    id="destCurrency"
                                    value={destCurrency}
                                    onChange={({ target }) => {
                                        setDestCurrency(target.value);
                                    }}
                                >
                                    {currencyOptions.map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </Select>
                            </label>
                        </Paragraph>
                        <Paragraph>
                            <label>
                                <Span>Enter amount</Span>
                                <Input
                                    value={amount}
                                    onChange={({ target }) => {
                                        setAmount(target.value);
                                    }}
                                    required
                                    type="number"
                                    name="amount"
                                    min="0.1"
                                    step="any"
                                />
                            </label>
                        </Paragraph>
                    </Fieldset>
                    <Paragraph>
                        <Button> Convert! </Button>
                        <Button type="reset">Clear</Button>
                    </Paragraph>
                    <Result result={result} />
                    <Span modified>
                        Currency rates were fetched from the European Central
                        Bank website. <br />
                        Current as of: {date}
                    </Span>
                </>
            )}
        </form>
    );
};

export default Form;
