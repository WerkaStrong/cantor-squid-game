import useDataRates from "./useDataRates";
import Result from "./Result";
import { useEffect, useState } from "react";
import { Fieldset, Paragraph, Span, Select, Input, Loading, Failure, Button } from "./styled";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  const [srcCurrency, setSrcCurrency] = useState('PLN');
  const [destCurrency, setDestCurrency] = useState('KRW');
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [date, setDate] = useState(null);
  const rates = useDataRates();

  useEffect(() => {
    const currencyOpts = ['PLN', 'KRW'];
    setCurrencyOptions(currencyOpts);
    setDate(rates.date);

    // zapobieganie przeliczanie waluty na tą samą walute np. PLN na PLN
    const valueOtherThanSrc = currencyOptions.find(item => item != srcCurrency);

    if (srcCurrency === destCurrency) {
      setDestCurrency(valueOtherThanSrc)
    }

  }, [srcCurrency, destCurrency, rates]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const resetResult = () => {
    setResult("N/A");
    setAmount("");
    setSrcCurrency('PLN');
    setDestCurrency('KRW');
  }

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
      method="get">
      {rates.status === "loading"
        ? (
          <Loading>
            Hej, właśnie pobierają się dane, chwilkę to potrwa 😉
          </Loading>
        ) : (
          rates.status === "error" ? (
            <Failure>
              Coś poszło nie tak, sprawdź połączenie internetowe lub zajrzyj tu później
            </Failure>
          ) : (
            <>
              <Fieldset>
                <legend className="form__legend">Przelicz {srcCurrency} na {destCurrency}</legend>
                <Paragraph>
                  <Span>Wybierz walutę początkową</Span>
                  <Select
                    id="srcCurrency"
                    value={srcCurrency}
                    onChange={({ target }) => {
                      setSrcCurrency(target.value)
                    }}
                  >
                    {currencyOptions.map((currency) => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}</option>
                    ))}
                  </Select>
                  <label>
                    <Span>Wybierz walutę końcową</Span>
                    <Select
                      id="destCurrency"
                      value={destCurrency}
                      onChange={({ target }) => {
                        setDestCurrency(target.value)
                      }}
                    >
                      {currencyOptions.map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}</option>
                      ))}
                    </Select>
                  </label>
                </Paragraph>
                <Paragraph>
                  <label>
                    <Span>Wpisz wartość</Span>
                    <Input
                      value={amount}
                      onChange={({ target }) => {
                        setAmount(target.value)
                      }}
                      required
                      type="number"
                      name="amount"
                      min="0.1"
                      step="any" />
                  </label>
                </Paragraph>
              </Fieldset>
              <Paragraph>
                <Button> Przelicz! </Button>
                <Button type="reset">
                  Wyczyść
                </Button>
              </Paragraph>
              <Result result={result} />
              <Span modified>
                Kursy walut zostały pobrane z witryny Europejskiego Banku Centralnego. <br />
                Aktualne na dzień: {date}
              </Span>
            </>
          )
        )}
    </form >
  )
};

export default Form;