import { Component } from "react";

class TodoList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            task: '',
            taskList: []
        };
    }

    addNewtask(newTask) {

        if(newTask === null || newTask.trim() === '') {
            return null;
        }

        let task = {
            id: this.state.taskList.length + 1,
            task: newTask
        };

        this.setState({
            task: '', 
            taskList: [...this.state.taskList, task]
        });
    }

    removeItem(id) {

        let newList = this.state.taskList.filter((item) => item.id !== id);

        this.setState({
            taskList: newList
        });
    }

    render(){
        return (
            <>
                
                <div className="position-absolute top-50 start-50 translate-middle" >
                    <div className="row">
                        <h1 className="text-center" >TO DO LIST</h1>
                        <hr />
                        <ul>
                            {this.state.taskList.map((item) => (
                                <li key={item.id}> {item.task}  <button className="btn btn-outline-danger mw-100" onClick={()=> this.removeItem(item.id)} >-</button></li>
                            ))}
                        </ul>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                </svg>
                            </span>
                            <input type="text" className="form-control form-control-lg" placeholder="Add Task" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.setState({task: e.target.value})} value={this.state.task} />
                        </div>

                        <button style={{ cursor:"pointer" }} onClick={()=> this.addNewtask(this.state.task)} className="btn btn-primary mt-5" >add item</button>
                    </div>
                </div>
                
            </>
        )
    }

}

export default TodoList;