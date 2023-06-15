import { useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskController from "../../controllers/task-controller";
import { tasksActions } from "../../redux/tasks-slic";

let TasksDetailsPage = () => {

    // let [task, setTask] = useState(useSelector((state) => state.tasks.item));
    let task = useSelector((state) => state.tasks.item);
    let taskcontroler = new TaskController();
    let dispatch = useDispatch();
    let navigator = useNavigate();
    let updateTaskStatusHandler = async (status) => {
        //هادا الحل بأستخدام useState
        // setTask((prevState) => {
        //     prevState.status = status;
        //     return { ...prevState };
        // });
        // هادا الحل بأستخدامpass by value

        let updatedTask = { ...task };
        updatedTask.status = status;
        let response = await taskcontroler.update(updatedTask);
        if (response) {
            dispatch(tasksActions.updateStatus(updatedTask));
        }
    };
    let oneditaskhandler = () => {
        navigator(`/dashboard/updateTask`);
    }
    return <Fragment>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className=" mb-2 mb-md-0">
                    <div className="d-flex align-items-center ms-3 ms-lg-4">
                    </div>
                    <div className="d-flex align-items-center ms-3 ms-lg-4">
                    </div>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" onClick={() => updateTaskStatusHandler("In Progress")} className={`btn btn-sm btn-outline-secondary ${task.status == "In Progress" && "active"}`}>In Progress</button>
                        <button type="button" onClick={() => updateTaskStatusHandler("Complete")} className={`btn btn-sm btn-outline-secondary ${task.status == "Complete" && "active"}`}>Completed</button>
                        <button type="button" onClick={() => updateTaskStatusHandler("Waiting")} className={`btn btn-sm btn-outline-secondary ${task.status == "Waiting" && "active"}`}>Waiting</button>
                        <button type="button" onClick={() => updateTaskStatusHandler("Done")} className={`btn btn-sm btn-outline-secondary ${task.status == "Done" && "active"}`}>Done</button>
                        <button type="button" onClick={() => updateTaskStatusHandler("Canceled")} className={`btn btn-sm btn-outline-secondary ${task.status == "Canceled" && "active"}`}>Canceled</button>
                    </div>
                    <button onClick={oneditaskhandler} type="button" className="btn btn-light-main btn">
                        <span data-feather="edit-3"></span> Edit
                    </button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src="img/1.png" className="img-fluid rounded de-img" />
                </div>
                <div className="col-md-6  mt-5">
                    <div className=" mb-3">
                        <span data-feather="bookmark" className="main-color"></span> <strong>Title:</strong> {task.name}
                    </div>
                    <div className="mb-3">
                        <span data-feather="layers" className="main-color"></span> <strong>Category:</strong> {task.categoryName}
                    </div>
                    <div className="">
                        <span data-feather="calendar" className="main-color"></span> <strong>Date:</strong> {task.startDate} to {task.endDate}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="task-info">
                        <p>{task.details}</p>
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
}
export default TasksDetailsPage;