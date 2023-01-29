import Result from "./Result";
import { useEffect, useState } from "react";
import { currencyByShort } from "../Container/currencies";
import { Fieldset, Paragraph, Span, Select, Input, Button } from "./styled";

export const Form = () => {
  const [srcCurrency, setSrcCurrency] = useState(currencyByShort["PLN"]);
  const [destCurrency, setDestCurrency] = useState(currencyByShort["KRW"]);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");

  const currencies = Object.values(currencyByShort);

  const calculateResult = ({ amount, srcCurrencyWeigth, destCurrencyWeigth }) => (
    +amount * srcCurrencyWeigth / destCurrencyWeigth).toFixed(4)

  const onFormSubmit = (event) => {
    event.preventDefault();

    const descAmount = calculateResult(
      {
        amount,
        srcCurrencyWeigth: srcCurrency.rate,
        destCurrencyWeigth: destCurrency.rate
      });

    setResult(`${descAmount} ${destCurrency.short}`);
  };

  const resetResult = () => {
    setResult("N/A");
    setAmount("");
    setSrcCurrency(currencyByShort["PLN"]);
    setDestCurrency(currencyByShort["KRW"])
  }

  useEffect(() => {
    const valueOtherThanSrc = currencies.find(item => item != srcCurrency);

    if (srcCurrency.short === destCurrency.short) {
      setDestCurrency(valueOtherThanSrc)
    }
  }, [srcCurrency, destCurrency]);

  return (
    <form
      onSubmit={onFormSubmit}
      onReset={resetResult}
      className="form"
      method="get">
      <Fieldset>
        <legend className="form__legend">Przelicz {srcCurrency.name} na {destCurrency.name}</legend>
        <Paragraph>
          <label>
            <Span>Wybierz walutę początkową</Span>
            <Select
              value={srcCurrency.short}
              onChange={({ target }) => {
                const currency = currencyByShort[target.value]
                setSrcCurrency(currency)
              }}
            >
              {currencies.map(({ name, short }) => (
                <option
                  key={short}
                  value={short}
                >
                  {name}</option>
              ))}
            </Select>
            <Span>Wybierz walutę końcową</Span>
            <Select
              value={destCurrency.short}
              onChange={({ target }) => {
                const currency = currencyByShort[target.value]
                setDestCurrency(currency)
              }}
            >
              {currencies.filter(filtered => filtered.short != srcCurrency.short).map((filtered) => (
                <option
                  key={filtered.short}
                  value={filtered.short}
                >
                  {filtered.name}</option>
              ))}
            </Select>
          </label>
        </Paragraph>
        <Paragraph>
          <label>
            <Span>Wpisz wartość</Span>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
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
    </form>
  )
};

export default Form;