import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { currencyByShort } from "../currencies";
import Result from "./Result";
import "./style.css";

export const Form = () => {

  const [srcCurrency, setSrcCurrency] = useState(currencyByShort["PLN"]);
  const [destCurrency, setDestCurrency] = useState([]);
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
  }

  return (
    <form
      onSubmit={onFormSubmit}
      onReset={resetResult}
      className="form"
      method="get">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz {srcCurrency.name} na {destCurrency.name}</legend>
        <p className="form__paragraph">
          <label>
            <h4>Wybierz walutę początkową</h4>
            <select
              value={srcCurrency.short}
              onChange={({ target }) => {
                const currency = currencyByShort[target.value]
                setSrcCurrency(currency)
              }}
              className="form__currencySelect">
              {currencies.map(({ name, short }) => (
                <option 
                key={short} 
                value={short}
                >
                  {name}</option>
              ))}
            </select>
            <h4>Wybierz walutę końcową</h4>
            <select
              value={destCurrency.short}
              onChange={({ target }) => {
                const currency = currencyByShort[target.value]
                setDestCurrency(currency)
              }}
              className="form__currencySelect">
              {currencies.filter(test => test.short != srcCurrency.short).map((n) => (
                <option 
                key={n.short} 
                value={n.short}
                >
                  {n.name}</option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <h4>Wpisz wartość</h4>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__input"
              required
              type="number"
              name="amount"
              min="0.1"
              step="any" />
          </label>
        </p>
      </fieldset>
      <p className="form__paragraph">
        <button
          className="form__button">
          Przelicz!
        </button>
        <button
          className="form__button"
          type="reset">
          Wyczyść
        </button>
      </p>
      <Result result={result} />
    </form>
  )
};

export default Form;