// Import the js file to test
import articles from "../src/client/js/components/articles"

describe("Testing the submit functionality", () => {
	test("Testing the handleSubmit() function", () => {
		  // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
		  expect(articles).toBeDefined();
	})});