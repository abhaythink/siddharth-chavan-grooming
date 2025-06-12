import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Tasks } from "/imports/collections/tasks.js";

Meteor.methods({
	async "tasks.insert"(text) {
		check(text, String);

		try {
			const taskId = await Tasks.insertAsync({
				text,
				createdAt: new Date(),
			});

			return taskId;
		} catch (error) {
			console.error("❌ Insert failed:", error);
			throw new Meteor.Error("insert-failed", error.message);
		}
	},

	async "tasks.remove"(taskId) {
		check(taskId, String);

		try {
			const removedCount = await Tasks.removeAsync(taskId);
			return removedCount;
		} catch (error) {
			console.error("❌ Remove failed:", error);
			throw new Meteor.Error("remove-failed", error.message);
		}
	},
});
