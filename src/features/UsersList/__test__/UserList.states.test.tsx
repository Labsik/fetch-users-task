import { screen } from "@testing-library/react";
import { UsersList } from "../UsersList";
import * as userFetchHook from "../hooks/useFetchUsers";
import { renderWithProviders } from "@test-utils/renderWithProviders";

jest.mock("../hooks/useFetchUsers");

describe("UsersList component (custom hook states)", () => {
  const mockedHook = userFetchHook as jest.Mocked<typeof userFetchHook>;

  test("shows loading indicator", () => {
    mockedHook.useFetchUsers.mockReturnValue({
      users: [],
      loading: true,
      error: null,
    });

    renderWithProviders(<UsersList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("displays error message", () => {
    mockedHook.useFetchUsers.mockReturnValue({
      users: [],
      loading: false,
      error: "Something went wrong",
    });

    renderWithProviders(<UsersList />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  test("shows empty state message when no users match", () => {
    mockedHook.useFetchUsers.mockReturnValue({
      users: [],
      loading: false,
      error: null,
    });

    renderWithProviders(<UsersList />);
    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });
});
