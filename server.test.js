const sum = require("./server");
const substract = require("./index");

describe("Testing server file", () => {
  it("should add up two numbers correctly", () => {
    expect(sum(1, 1)).toBe(2);
  });
  it("should substract up two numbers correctly", () => {
    expect(sum(1, 1)).toBe(0);
  });
});
