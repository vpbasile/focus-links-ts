import React, { useState } from "react";

export default function Task(props: {
	key: string,
	uid: string,
	name: string,
	description: string,
	hue: string,
	completed: boolean,
	projectId: string,
	currentEditTask: string,
	setCurrentEditTask: (value: string) => void
}): JSX.Element {
	//<> Cache the props
	const uid = props.uid;
	const hue = props.hue;
	let description = props.description;
	//We don;t want blak descriptions
	if (description === "") { description = "-" }
	// let checkBox = <input className={`form-check-input me-3 p-1 bg-${hue}-bright `} id={"todo-cb-" + uid} type="checkbox" />;

	//<> State management
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState('');

	// Text for the buttons
	const editText = ".Edit.";
	const finishText = "Finish";
	// const deleteText = "Delete";
	// const checkmark = "\u2713";
	const completeText = "!Done!";
	// const incompleteText = "\u2751";
	const incompleteText = "------"

	function taskName() {
		let taskName = <label className="form-check-label h5" htmlFor={"todo-cb-" + uid}>{props.name} [{props.uid}]</label>
		// If this task is currently being edited, show the form
		if (props.currentEditTask === uid) {
			taskName = <input className={`m-2 bg-${hue}-bright text-dark border-gray-dark rounded-2`} type="text" />;
		}
		return taskName;

	}

	function completeTask() {
		// Set completed to true
		console.log("completeTask");
	}

	function uncompleteTask() {
		// Set completed to false
		console.log("uncompleteTask");
	}

	function completeButton() {
		if (props.completed) {
			// If it's complete, display Done.  You can click it to uncomplete the task.
			return <button
				className="btn lh-lg me-3 p-1"
				onClick={() => uncompleteTask()}>{completeText}
			</button>;
		} else {
			// If it's incomplete, display the finish button
			return <button
				className={`btn lh-lg bg-${hue}-bright text-${hue}-dark border-gray-dark me-3 p-1`}
				onClick={() => completeTask()}
			>.Todo.</button>;
		}
	}

	function editButton() {
		if (isEditing) {
			return <button
				className={`btn lh-lg me-3 p-1 text-${hue}-bright bg-${hue}-dark border-${hue}-bright`}
				onClick={() => setEditing(false)}>{finishText}</button>
		} else {
			return <button
				className="btn lh-lg me-3 p-1"
				onClick={() => setEditing(true)}>{editText}</button>
		}

	}

	// function editButton(): JSX.Element {
	// 	// If task 000 is being edited ("Reading mode", which is most of the time), enable the edit button
	// 	if (props.currentEditTask === "000") {
	// 		return (
	// 			<button className="btn me-3 p-1" onClick={() => props.setCurrentEditTask(uid)}>
	// 				{/* onClick={() => props.setCurrentEditTask(uid)} */}
	// 				{editText}
	// 			</button>
	// 		);
	// 	} else {
	// 		// If this task is currently being edited, show the finish button
	// 		if (props.currentEditTask === uid) {
	// 			return <button className="btn bg-orange-bright text-orange-dark border-gray-dark me-3 p-1" onClick={() => props.setCurrentEditTask("")}>{finishText}
	// 			</button>;
	// 		} else {
	// 			// If none of thos are true...
	// 			// ...then another task is being edited, so disable the edit button
	// 			return <button className="btn bg-gray-dark me-3 p-1" disabled>{editText}</button>;
	// 		}
	// 	}
	// }

	return (
		<React.Fragment>
			<tr><td colSpan={2}><hr/></td></tr>
			<tr>
				<td>
					{completeButton()}
				</td>
				<td>
					{taskName()}
				</td>
			</tr>
			<tr>
				<td>{editButton()}</td>
				<td className="text-center">{description}</td>
			</tr>
			
		</React.Fragment>
	);
}