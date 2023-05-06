
import generalAnalysis from "../src/server/allAPI"

describe("Testing the submit functionality", () => {
	test("Testing the handleSubmit() function", () => {
		  // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
		  expect(generalAnalysis("New York City")).toBeDefined();
	})});