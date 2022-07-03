import React from 'react';
import './App.css';

// <> Components
import Project from '../src/components/Project';

// <> Project data
import projects from '../src/data/projects.json';
import tasks from '../src/data/tasks.json';

// <> The App
function App(): JSX.Element {
  // <> App globals
  const colors = ['orange', 'blue', 'green', 'red', 'purple'];
  let currentColor = 0;
  // <> App states
  const [projectsState, setProjectsState] = React.useState(projects);
  const [tasksState, setTasksState] = React.useState(tasks);
  const [currentEditTask, setCurrentEditTask] = React.useState('000');

  //<> Display the list of projects
  const projectList = projects.map(project => {
    // <> Project globals
    let projectKey = `project-${project.uid}`;
    let projectHue = colors[currentColor++ % colors.length];
    // <> For each project, get the tasks
    let projectTodos = tasksState.filter(task => task.projectId === project.uid);
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
        <Project
          key={`project-add`}
          uid={`project-add`}
          title={`Add a task`}
          hue={"gray"}
          description={`Add a task to a project`}
          todos={[]}
          currentEditTask={currentEditTask} 
          setCurrentEditTask={setCurrentEditTask}
        />
      </div>
    </div>
  );
}

export default App;
