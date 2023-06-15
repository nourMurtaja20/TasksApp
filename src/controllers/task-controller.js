import axios from "axios";
import Task from "../models/Task";

class TaskController {
    async create(task) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.post(`https://ws-tasks-app-default-rtdb.firebaseio.com/tasks.json?auth=${token}`, task);
            return response.data.name;
        } catch (error) {
        }
    }
    async read() {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.get(`https://ws-tasks-app-default-rtdb.firebaseio.com/tasks.json?auth=${token}`);
            if (response.data.length != 0) {
                let tasks = [];
                for (let key in response.data) {
                    let item = response.data[key];
                    let task = new Task();
                    task.id = key;
                    task.name = item.name;
                    task.categoryId = item.categoryId;
                    task.categoryName = item.categoryName;
                    task.details = item.details;
                    task.startDate = item.startDate;
                    task.endDate = item.endDate;
                    task.status = item.status;

                    tasks.push(task);
                }
                return tasks;
            } else {
                return [];
            }
        } catch (error) {
            return [];
        }
    }
    async update(updatedTask) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.put(`https://ws-tasks-app-default-rtdb.firebaseio.com/tasks/${updatedTask.id}.json?auth=${token}`,
                {
                    name: updatedTask.name,
                    categoryId: updatedTask.categoryId,
                    categoryName: updatedTask.categoryName,
                    details: updatedTask.details,
                    startDate: updatedTask.startDate,
                    endDate: updatedTask.endDate,
                    status: updatedTask.status,
                });
            return true;
        } catch (error) {
            return false;
        }
    }
    async delete(id) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.delete(`https://ws-tasks-app-default-rtdb.firebaseio.com/tasks/${id}.json?auth=${token}`);
            return true;
        } catch (error) {
            return false;
        }
    }
}
export default TaskController;