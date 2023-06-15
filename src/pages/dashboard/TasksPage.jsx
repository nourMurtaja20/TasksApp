import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../../component/Tasks/TaskItem";
import TaskController from "../../controllers/task-controller";
import { tasksActions } from "../../redux/tasks-slic";
let TasksPage = () => {
    let tasks = useSelector((state) => state.tasks.filterdData);
    let categories = useSelector((state) => state.categories.data);
    let taskcontroler = new TaskController();
    let dispatch = useDispatch();
    let onCategoryFilterHandler = (event) => {
        dispatch(tasksActions.filterByCategory(event.target.value));
    };
    let onStatusFilterHandler = (event) => {
        dispatch(tasksActions.filterByStatus(event.target.value));
    };
    let fetchTasks = async () => {
        if (tasks.length == 0) {
            let tasks = await taskcontroler.read();
            dispatch(tasksActions.read(tasks));
        }
    }
    useEffect(() => { fetchTasks(); }, []);
    return <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className=" mb-2 mb-md-0">
                <div className="d-flex align-items-center ms-3 ms-lg-4">
                </div>
                <div className="d-flex align-items-center ms-3 ms-lg-4">
                </div>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"> <select onChange={onStatusFilterHandler} className=" dropdown form-control pull-right" placeholder="Filter By status" autocomplete="off">
                    <option value="All" >Filter By status</option>
                    <option value="Done">Done</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Waiting">Waiting</option>
                </select></li>
                <li className="list-inline-item mt-3"> <select onChange={onCategoryFilterHandler} className=" dropdown form-control pull-right" placeholder="Filter By status" autocomplete="off">
                    <option value="All">Filter By category</option>
                    {categories.map((element) => (<option value={element.id} key={element.id}>{element.name}</option>))}
                </select></li>
            </ul>
        </div>

        <div className="row mt-5">
            {tasks.map((element) => (
                <TaskItem key={element.id} task={element} />))}
        </div>
    </main>
}
export default TasksPage;