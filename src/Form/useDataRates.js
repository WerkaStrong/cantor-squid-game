import { useEffect, useState } from "react";

const useDataRates = () => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.exchangerate.host/latest?base=PLN`);
            const data = await response.json();
            setRates(data.rates);
          } catch (error) {
            console.error('Wystąpił błąd', error);
          }
        };
    
        fetchData();
      }, []);

      return rates;
}

export default useDataRates;