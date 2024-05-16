import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

const searchAndFilter = async (searchText, filterName) => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeAction = screen.getAllByTestId("resCard");
  expect(cardsBeforeAction.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  const filterBtn = screen.getByRole("button", { name: filterName });

  fireEvent.change(searchInput, { target: { value: searchText } });
  fireEvent.click(filterBtn);

  const cardsAfterAction = screen.getAllByTestId("resCard");
  return cardsAfterAction;
};

it("Should Search ResList for pizza text input", async () => {
  const cardsAfterSearch = await searchAndFilter("pizza", "Search");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated ResList", async () => {
  const cardsAfterFilter = await searchAndFilter("", "Top Rated Restaurants");

  expect(cardsAfterFilter.length).toBe(6);
});
