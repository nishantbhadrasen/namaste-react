import { sum } from "../Sum";

test("Sum should calculate the sum of two numbers ", () => {
  const result = sum(5, 2);

  //Assertion
  expect(result).toBe(7);
});
