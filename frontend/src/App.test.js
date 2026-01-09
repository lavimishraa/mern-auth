import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders Register page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const registerText = screen.getByText(/register/i);
  expect(registerText).toBeInTheDocument();
});