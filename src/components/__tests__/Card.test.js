import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

describe("Restaurant Menu and Cart Tests", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  });

  it("Should load Restaurant Menu component", async () => {
    const accordianHeader = screen.getByText("Matka Kulfi (3)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);
    expect(screen.getByText("Cart 🛒 (0 items)")).toBeInTheDocument();
  });

  it("Should add items to the cart", async () => {
    const addBtns = screen.getAllByRole("button", { name: "ADD +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart 🛒 (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart 🛒 (2 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[2]);
    expect(screen.getByText("Cart 🛒 (3 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(6);
  });

  it("Should clear items from the cart", async () => {
    const addBtns = screen.getAllByRole("button", { name: "ADD +" });
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);
    expect(
      screen.getByText("Cart is empty add Items to the carts!")
    ).toBeInTheDocument();
  });
});
