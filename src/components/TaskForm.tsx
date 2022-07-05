import React, { useState } from 'react';

export default function TaskForm(
	props: {
		key: string,
		projectsState: ({
			uid: string;
			title: string;
			description: string;
			url: string;
			tags: string;
		} | { uid: string; title: string; description: string; url?: undefined; tags?: undefined; })[],
		taskListState: {}[],
		setTaskListState(tasks: any): void,
		defaultName: string,
		defaultUrl: string,
		defaultDescription: string,
		defaultProjectId: string,
	}): JSX.Element {
	// <> Cache props
	let projectsState = props.projectsState;
	let taskListState = props.taskListState;
	let setTaskListState = props.setTaskListState;

	// <> CSS
	const formElementClasses = "bg-gray-dark text-gray-bright border-gray-bright"

	// For every aspect of a todo, we need a temp state to store the new value
	const [tempName, setTempName] = useState(props.defaultName);
	const [tempUrl, setTempUrl] = useState(props.defaultUrl);
	const [tempDescription, setTempDescription] = useState(props.defaultDescription);
	const [tempProjectId, setTempProjectId] = useState(props.defaultProjectId);

	// Build a select list of projects
	function buildProjectSelect(): JSX.Element {
		const projectSelect = projectsState.map((project: { uid: string; title: string; }) => {
			return (
				<option key={project.uid} value={project.uid}>
					{project.title} {project.uid}
				</option>
			);
		});
		return (
			<select
				className={"form-control " + formElementClasses}
				id="project-select"
				onChange={e => { setTempProjectId(e.target.value) }}
			>
				{projectSelect}
			</select>
		);
	}

	function addTask(name: string, url: string, description: string, project: string): void {
		// let projectData = projectsState.find(project => project.uid === project);
		// console.log(`Adding ${name} to ${projectData.title}`);
		const newTask = {
			uid: `${Math.floor(Math.random() * 1000000)}`,
			name: name,
			url: url,
			description: description,
			completed: false,
			projectId: project
		};
		setTaskListState([...taskListState, newTask]);
	}


	return (
		<table className="w-100">
			<tbody>
				<tr>
					<td><label htmlFor='tempName'>Name:</label></td>
					<td><input id='tempName' className={formElementClasses + 'h5'} defaultValue={tempName} onChange={(e) => setTempName(e.target.value)} /></td>
				</tr>
				<tr>
					<td><label htmlFor='tempUrl'>URL:</label></td>
					<td><input id='tempUrl' className={formElementClasses} defaultValue={tempUrl}
					onChange={(e) => setTempUrl(e.target.value)} /></td>
				</tr>
				<tr>
					<td><label htmlFor='tempDescription'>Description:</label></td>
					<td><textarea id='tempDescription' className={formElementClasses} defaultValue={tempDescription}
					onChange={(e) => setTempDescription(e.target.value)} />
					</td>
				</tr>
				<tr>
					<td><label htmlFor='tempProjectId'>Project:</label></td>
					<td>{buildProjectSelect()}</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<button className={"btn btn-primary" + formElementClasses} onClick={() => addTask(tempName, tempUrl, tempDescription, tempProjectId)}>Add Task</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}