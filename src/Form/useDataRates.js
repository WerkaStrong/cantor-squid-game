import { useEffect, useState } from 'react';

const useDataRates = () => {
    const [rates, setRates] = useState({
        status: 'loading',
    });

    // Zaktualizowany link do API
    const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/PLN';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_URL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();

                // Pobieranie kursów dla PLN, KRW, EUR, USD
                const filteredRates = {
                    PLN: data.rates.PLN, // Kurs dla PLN
                    KRW: data.rates.KRW, // Kurs dla KRW
                    EUR: data.rates.EUR, // Kurs dla EUR
                    USD: data.rates.USD, // Kurs dla USD
                };

                setRates({
                    rates: filteredRates,
                    date: data.date,
                });
            } catch (error) {
                setRates({
                    status: 'error',
                });
            }
        };

        setTimeout(fetchData, 1500);
    }, []);

    return rates;
};

export default useDataRates;
