import React, { useState } from 'react';
import './App.css';

// <> Components
import Project from '../src/components/Project';
import TaskForm from './components/TaskForm';

// <> Project data
import projects from '../src/data/projects.json';
import tasks from '../src/data/tasks.json';

// <> The App
function App(): JSX.Element {
  // <> App globals
  const colors = ['orange', 'blue', 'green', 'red', 'purple'];
  let currentColor = 0;
  // <> App states
  const [projectsState, setProjectsState] = useState(projects);
  const [taskListState, setTaskListState] = useState(tasks);
  const [currentEditTask, setCurrentEditTask] = useState('000');

  // <> App functions
  function deleteTask(uid: string): void {
    console.log(`Deleting task ${uid}`);
    const newTasks = taskListState.filter(task => task.uid !== uid); // Make this currentEditTask if we only want to be able to delete that one
    setTaskListState(newTasks);
  }

  function completeTask(uid:string) {
		// Set completed to true
    const newTasks = taskListState.map(task => { 
      if (task.uid === uid) { task.completed = true; }
      return task;
    });
    setTaskListState(newTasks);
	}

	function uncompleteTask(uid:string) {
		// Set completed to false
    const newTasks = taskListState.map(task => {
      if (task.uid === uid) { task.completed = false; }
      return task;
    });
    setTaskListState(newTasks);
	}

  // UI Functions

  //<> Display the list of projects
  const projectList = projects.map(project => {
    // <> Project globals
    let projectKey = `project-${project.uid}`;
    let projectHue = colors[currentColor++ % colors.length];
    // <> For each project, get the tasks
    let projectTodos = taskListState.filter(task => task.projectId === project.uid);
    // <> Render the project
    return (<Project
      key={projectKey}
      uid={project.uid}
      title={project.title}
      hue={projectHue}
      description={project.description}
      todos={projectTodos}
      currentEditTask={currentEditTask}
      setCurrentEditTask={setCurrentEditTask}
      deleteTask={deleteTask}
      completeTask={completeTask}
      uncompleteTask={uncompleteTask}
    />);
  });

  // <> Render the App
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <header className="App-header">
            <h1 className='m-2'>Focus-Links (typeScript edition)</h1>
          </header>
        </div>
      </div>
      <div id="app-row" className="row">
        {projectList}
        <div id="project-new"
          className={`col-5 m-2 p-3 project-div bg-gray-dark border text-gray-bright border-gray-bright`} >
          <div className="project-header m-1 my-3">
            {/* {buildNewTaskForm()} */}
            <TaskForm
              key='0'
              projectsState={projectsState}
              taskListState={taskListState}
              setTaskListState={setTaskListState}
              defaultName='New Task'
              defaultUrl=''
              defaultDescription='Enter a description'
              defaultProjectId={projectList[0].props.uid}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
