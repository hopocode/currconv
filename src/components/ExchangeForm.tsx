import { Control, Controller } from "react-hook-form";
import { TextField, MenuItem, Select } from "@mui/material";
import { ExchangeRate } from "../App.types";

interface FormInputs {
  currentAmount: number;
  currency: string;
}

export interface ExchangeFormProps {
  control: Control<FormInputs>;
  data: ExchangeRate[] | undefined;
}

export const ExchangeForm = ({ control, data }: ExchangeFormProps) => {
  return (
    <>
      <form>
        <Controller
          name="currentAmount"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Amount in CZK"
              type="number"
              fullWidth
              margin="normal"
            />
          )}
        />

        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <Select {...field} fullWidth>
              {data?.map((rate) => (
                <MenuItem key={rate.code} value={rate.code}>
                  {rate.code} - {rate.currency}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </form>
    </>
  );
};
