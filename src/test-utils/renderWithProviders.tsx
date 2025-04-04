import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from "@store/users/usersSlice";
import userDetailsReducer from "@store/userDetails/userDetailsSlice";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { RootState } from "@store/store";

const rootReducer = combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer,
});

export function createTestStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

type ExtendedRenderOptions = {
  preloadedState?: Partial<RootState>;
  store?: ReturnType<typeof createTestStore>;
  renderOptions?: Omit<RenderOptions, "queries">;
};

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
    store = createTestStore(preloadedState),
    renderOptions,
  }: ExtendedRenderOptions = {}
) {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
    renderOptions
  );
}
