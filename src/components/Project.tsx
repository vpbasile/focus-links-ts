import Task from './Task';

export default function Project(props: {
	key: string,
	uid: string,
	title: string,
	description: string,
	hue?: string,
	todos: {
		uid: string,
		name: string,
		url: string,
		description: string,
		completed: boolean,
		projectId: string
	}[],
}): JSX.Element {
	const projectHue = props.hue || 'orange';
	// <> For each project, get the tasks
	const todoList = props.todos.map(todo => {
		return (<Task
			key={todo.uid}
			uid={todo.uid}
			name={todo.name}
			description={todo.description}
			completed={todo.completed}
			projectId={todo.projectId}
		/>);
	});
	return (
		<div className={`col-5 m-2 p-3 project-div bg-${projectHue}-dark text-${projectHue}-bright`} id={props.key}>
			<div className="project-header m-1 my-3">
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				<hr/>
			</div>
			{todoList}
			<hr/>

		</div>
	);
}