import "./style.css";

const Form = () => (
    <form className="form" method="get">
            <fieldset className="form__fieldset">
              <legend className="form__legend">Przelicz wony południowokoreańskie na złotówki</legend>
              <p className="form__paragraph">
                <label>
                  <h3>Wybierz Walutę</h3>
                  <select className="form__currencySelect">
                    <option className="form_ResPLN" value="PLN">PLN</option>
                    <option className="form_ResKRW" value="KRW" selected>Won południowokoreański
                    </option>
                  </select>
                </label>
              </p>
              <p className="form__paragraph">
                <label>
                  Wpisz wartość <input className="form__input" required type="number"
                    name="amount" min="0.1" step="any" />
                </label>
              </p>
              <p className="form__paragraph">
                <span id="currencyName">Kurs KRW</span>
                <label>
                  <input className="form__input" type="number" min="0.0001"
                    step="any" value="0.0033" />
                </label>
              </p>
            </fieldset>
            <p className="form__paragraph">
              <button className="form__button">Przelicz!</button>
              <button className="form__button" type="reset">Wyczyść</button>
            </p>
            <p className="form__result">Twój wynik: <strong>N/A</strong></p>
          </form>
);

export default Form;