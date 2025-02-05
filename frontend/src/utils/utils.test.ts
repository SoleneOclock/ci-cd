import { expect, test } from "vitest";
import { sum } from "./utils";

// test de la fonction sum
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
