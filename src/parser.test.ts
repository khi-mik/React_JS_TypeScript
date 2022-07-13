import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("2 ** + 1", () => {
    expect(parser("2 ** + 1")).toEqual([2, "**", "+", 1]);
  });

  it("2 ^ 5", () => {
    expect(parser("2 ^ 5")).toEqual([2, "^", 5]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });
});

// describe("Parser invalid cases", () => {
//   it("1 + + 33 - 2", () => {
//     expect(() => parser("1 + + 33 - 2")).toThrow(
//       TypeError("Unexpected string+1")
//     );
//   });

//   it("1 ! 33 - 2", () => {
//     expect(() => parser("1 ! 33 - 2")).toThrow(
//       TypeError("Unexpected string+2")
//       );
//   });
// });