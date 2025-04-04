import { render, screen } from "@testing-library/react";
import { UsersList } from "../UsersList";
import { Provider } from "react-redux";
import store from "@store/store";
import { BrowserRouter } from "react-router-dom";

describe("UsersList basic rendering", () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UsersList />
        </BrowserRouter>
      </Provider>
    );

  test("renders main heading", () => {
    setup();
    expect(screen.getByRole("heading", { name: /users/i })).toBeInTheDocument();
  });

  test("displays search input after data loads", async () => {
    setup();
    const input = await screen.findByPlaceholderText(/search by name/i);
    expect(input).toBeInTheDocument();
  });
});
