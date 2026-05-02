// src/sum.test.js
import { sum } from "./sum";

test("sum adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});


test("sum adds positive numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("sum works with negatives", () => {
  expect(sum(-2, 3)).toBe(7);
});


