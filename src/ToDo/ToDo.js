import React from 'react';

class ToDo extends React.Component {
   state = {
       tasks: ["task1", "task2", "task3"]
   }

    render() {
        const Tasks = this.state.tasks.map((task)=>{
            return (
                <p key={index} className="task">
                    {task}
                </p>
            )
        })
        return (
            <div>
                <div>
                    <input
                      type="text"
                      placeholdr="Add Task"
                    />
                    <button>Add</button>
                </div>
                <div>
                    {Tasks}
                </div>
            </div>
        )
    }
}
export default ToDo;