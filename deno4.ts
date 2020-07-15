// OTHER TOOLING

// Dependency inspector
// Formatting
// Documentation
// Testing

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
export function add(x: number, y: number): number {
  return x + y;
}

Deno.test("Add adds 2 numbers", () => {
  const result = add(2, 3);
  assertEquals(result, 5);
});
