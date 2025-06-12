import { Meteor } from "meteor/meteor";
import { Students } from "/imports/api/students";
import "/imports/api/studentMethods.js"; // Import methods

Meteor.publish("students", function () {
	return Students.find(); // Publish all students
});
