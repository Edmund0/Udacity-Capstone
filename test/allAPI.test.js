
const generalAnalysis = require('./allAPI')

describe("Testing the submit functionality", () => {
	test("Testing the handleSubmit() function", () => {
		  // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
		  eexpect(generalAnalysis("New York City")).toBeDefined();
	})});