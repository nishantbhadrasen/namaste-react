import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";

describe("RestaurantCard Component Tests", () => {
  it('Should render "Pizza Hut"', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    expect(screen.getByText("Pizza Hut")).toBeInTheDocument();
  });

  it('Should check for "Fast Delivery" label when conditions are met', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const fastDelivery = screen.queryByText("Fast Delivery");
    if (MOCK_DATA.info.sla.deliveryTime <= 33) {
      expect(fastDelivery).toBeInTheDocument();
    } else {
      expect(fastDelivery).not.toBeInTheDocument();
    }
  });
});
