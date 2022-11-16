import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

export const Form = () => {

  const [mySelect, setMySelect] = useState(currencies[1].short);
  const [currency, setCurrency] = useState(currencies[1].rate);
  const [amount, setAmount] = useState("");


  const myFun = (mySelect, amount) => {
    const rate = currencies.find(({ short }) => short === mySelect)
      .rate;
  };


  const onFormSubmit = (event) => {
    event.preventDefault();
    setMySelect(event.target.value);
    setCurrency(event.target.value);
  };


  return (
    <form
      onSubmit={onFormSubmit}
      className="form"
      method="get">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz wony południowokoreańskie na złotówki</legend>
        <p className="form__paragraph">
          <label>
            <h3>Wybierz Walutę</h3>
            <select
              value={mySelect}
              onChange={({ target }) => setMySelect(target.value)}
              className="form__currencySelect">
              <option
                className="form_ResPLN"
                value="PLN">PLN
              </option>
              <option
                className="form_ResKRW"
                value="KRW"
              >Won południowokoreański
              </option>
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            Wpisz wartość
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__input"
              required type="number"
              name="amount"
              min="0.1"
              step="any" />
          </label>
        </p>
        <p className="form__paragraph">
          <span
            id="currencyName"
          >Kurs {currencies[1].short}</span>
          <label >
            <input
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__input"
              required type="number"
              min="0.0001"
              step="any"
            />
          </label>
        </p>
      </fieldset>
      <p className="form__paragraph">
        <button className="form__button">Przelicz!</button>
        <button className="form__button" type="reset">Wyczyść</button>
      </p>
      <p className="form__result">Twój wynik: <strong>N/A</strong></p>
    </form>
  )
};

export default Form;