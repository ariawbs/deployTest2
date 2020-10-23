const sum = require("./server");

describe("Testing server file", () => {
  it("should add up two numbers correctly", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
