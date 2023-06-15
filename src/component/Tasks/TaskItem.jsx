import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { tasksActions } from "../../redux/tasks-slic";

let TaskItem = (props) => {
    let dispatch = useDispatch();
    let navigator = useNavigate();
    let onShowDetailHandler = () => {
        dispatch(tasksActions.setItem(props.task));
        navigator(`/dashboard/taskdetail`);
    }

    return <div className="col-md-4">
        <div className="card task card">
            <img src="img/3.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">    <span data-feather="calendar"></span> {props.task.startDate} <span className="main-color">To </span> {props.task.endDate}</h6>
                <p className="card-text">{props.task.details}</p>
                <hr />
                <span className="btn badge-light-warning status-btn Wating">{props.task.status}</span>
                <button  onClick={onShowDetailHandler} className="btn btn-bg-gray pull-right">
                    <span data-feather="arrow-right"></span>
                </button>
            </div>
        </div>
    </div>
}
export default TaskItem;