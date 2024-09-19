describe("binary-search-tree", () => {
  const testCases = [{
    name:"1 === 1",
    input: { value: 1},
    expected: { value: 1},
    runTest: (input: unknown, expected: unknown) => {
     expect(input).toBe(expected)
    }
  }]

  test.each(testCases)('$name', testCase => {
    const { input, expected, runTest } = testCase;
    runTest(input.value, expected.value);
  })
});