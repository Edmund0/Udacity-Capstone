// Import the js file to test
import database from "../src/client/js/components/database"

describe("Testing the submit functionality", () => {
	test("Testing the handleSubmit() function", () => {

		  // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
		  expect(database.addTrip).toBeDefined();
          expect(database.removeTrip).toBeDefined();
          expect(database.addInfo).toBeDefined();
          expect(database.removeInfo).toBeDefined();

          expect(database.removeTrip("default")).toBeFalsy();
          expect(database.removeTrip("1")).toBeTruthy();
        
          const types = ["flight", "lodging", "packages", "notes"];

          database.addTrip("1", "1", "1", "1", "1", "1");

          for (const type of types) {

            let index = "default";

            expect(database.addInfo(index, type, "")).toBeFalsy();
            expect(database.removeInfo(index, type)).toBeFalsy();

            index = "1";

            expect(database.addInfo(index, type, "")).toBeTruthy();
            expect(database.removeInfo(index, type)).toBeTruthy();

          }

	})});