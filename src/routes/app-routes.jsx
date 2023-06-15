import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/dashborad";
import TasksPage from "../pages/dashboard/TasksPage";
import NewTasksPage from "../pages/dashboard/NewTaskPage";
import Login from "../pages/Login"
import TasksDetailsPage from "../pages/dashboard/TaskDetailsPage";
import CategoriesPage from "../component/dashboard/Categoriespage";
import NewCategoryPage from "../pages/dashboard/NewCategoryPage";
import UpdateCategoryPage from "../pages/dashboard/UpdateCategoryPage";
import UpdateTaskPage from "../pages/dashboard/UpdateTaskPage";
import { useSelector } from "react-redux";
let AppRouter = () => {
    let loggedin = useSelector((state) => state.appAuth.loggedin);

    console.log(loggedin);
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={loggedin ? <Dashboard /> : <Navigate to="/login" />} >
            <Route path="/dashboard" element={<TasksPage />} />
            <Route path="/dashboard/newtask" element={<NewTasksPage />} />
            <Route path="/dashboard/categories" element={<CategoriesPage />} />
            <Route path="/dashboard/newcategory" element={<NewCategoryPage />} />
            <Route path="/dashboard/update" element={<UpdateCategoryPage />} />
            <Route path="/dashboard/taskdetail" element={<TasksDetailsPage />} />
            <Route path="/dashboard/updateTask" element={<UpdateTaskPage />} />
        </Route>
    </Routes>
}
export default AppRouter;