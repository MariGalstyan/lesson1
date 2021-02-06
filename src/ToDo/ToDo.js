import React from 'react';

class ToDo extends React.Component {
   state = {
       tasks: ["task1", "task2", "task3"]
   }

    render() {
        const Tasks = this.state.tasks.map((tasks, index)=>{
            return (
                <p key={index} className="task">
                    {tasks}
                </p>
            )
        })
        return (
            <div>
                <h1>ToDo component</h1>
                <div>
                    <input
                      type="text"
                      placeholdr="Add Task"
                    />
                    <button>Add</button>
                </div>
                <div className="tasks">
                    {Tasks}
                </div>
            </div>
        )
    }
}
export default ToDo;