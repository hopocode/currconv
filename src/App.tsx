import { useQuery } from "@tanstack/react-query";
import { fetchExchangeRates } from "./api/api";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { ExchangeTable } from "./components/ExchangeTable";
import { ExchangeForm } from "./components/ExchangeForm";
import { ExchangeRate } from "./App.types";

const App = () => {
  const { data, isLoading, error } = useQuery<ExchangeRate[]>({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
  });

  const { control, watch } = useForm({
    defaultValues: {
      currentAmount: 100,
      currency: "EUR",
    },
  });

  const currentAmount = watch("currentAmount");
  const selectedCurrency = watch("currency");

  const selectedRate = data?.find((rate) => rate.code === selectedCurrency);

  const convertedAmount = selectedRate
    ? (currentAmount / selectedRate.rate) * selectedRate.amount
    : 0;

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Currency Converter
      </Typography>
      <ExchangeForm control={control} data={data} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Converted Amount: {convertedAmount.toFixed(2)} {selectedCurrency}
      </Typography>
      {data && <ExchangeTable data={data} />}
    </div>
  );
};

export default App;
