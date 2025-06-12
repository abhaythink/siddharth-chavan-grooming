import { Meteor } from "meteor/meteor";
import { Students } from "./students";

Meteor.methods({
	"students.insert"(name, age, course) {
		if (!name || !age || !course) {
			throw new Meteor.Error("All fields are required");
		}

		Students.insert({
			name,
			age: Number(age),
			course,
			createdAt: new Date(),
		});
	},
});
