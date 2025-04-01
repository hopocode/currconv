import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

describe("Currency Converter App", () => {
  test("renders the form inputs", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(await screen.findByText(/Currency/i)).toBeInTheDocument();
  });

  // test("updates conversion when user enters amount", async () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <App />
  //     </QueryClientProvider>
  //   );

  //   const amountInput = screen.getByLabelText(
  //     /Amount in CZK/i
  //   ) as HTMLInputElement;

  //   fireEvent.change(amountInput, { target: { value: "200" } });

  //   expect(amountInput.value).toBe("200");
  // });

  // test("shows loading state when fetching data", () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <App />
  //     </QueryClientProvider>
  //   );

  //   expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  // });
});
