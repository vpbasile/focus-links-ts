export default function Task(props: {
	key: string,
	uid: string,
	name: string,
	description: string,
	completed: boolean,
	projectId: string
}): JSX.Element {
	const uid = props.uid;
	return (
		<div id={"todo-div-" + uid} className="m-2">
			<input className="form-check-input m-2" id={"todo-cb-" + uid} type="checkbox" />
			<label className="form-check-label" htmlFor={"todo-cb-" + uid}>{props.name}</label>
		</div>
	);
}