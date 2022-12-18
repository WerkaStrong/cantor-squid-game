import { render } from "@testing-library/react";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import "./style.css";

export const Form = () => {

  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");


  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;


    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }



  const onFormSubmit = (event) => {
    event.preventDefault();
    setCurrency(event.target.value);
    calculateResult(currency, amount);
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
        <legend className="form__legend">Przelicz wony południowokoreańskie na złotówki</legend>
        <p className="form__paragraph">
          <label>
            <h3>Wybierz Walutę</h3>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__currencySelect"
              >
                {currencies.map((currency => (
                  <option
                  key={currency.short}
                  className="form_ResPLN"
                  value={currency.short}
                  >
                    {currency.name}
                </option>
                )))}
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <h3>Wpisz wartość</h3>
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