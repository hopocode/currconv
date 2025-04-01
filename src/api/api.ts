export const fetchExchangeRates = async () => {
  const response = await fetch(
    //"https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
    "/api-mocks/daily.txt"
  );
  const text = await response.text();
  return parseExchangeRates(text);
};

const parseExchangeRates = (text: string) => {
  const lines = text.split("\n").slice(2); // Skip the first two lines
  return lines
    .map((line) => line.split("|"))
    .filter((cols) => cols.length === 5) // Ensure valid row
    .map(([country, currency, amount, code, rate]) => ({
      country,
      currency,
      amount: Number(amount),
      code,
      rate: Number(rate),
    }));
};
