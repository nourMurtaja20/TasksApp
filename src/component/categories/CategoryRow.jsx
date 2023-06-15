import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryController from "../../controllers/category-controller";
import { categoriesActions } from "../../redux/categories-slic";

let CategoryRow = (props) => {
    let dispatch = useDispatch();
    let navigator = useNavigate();
    let categoryControler = new CategoryController();
    let onDeleteHandler = async () => {
        let result = await categoryControler.delete(props.category.id);
        if (result) {
            dispatch(categoriesActions.delete(props.category.id));
        }
    }
    let onUpdateHandler = () => {
        dispatch(categoriesActions.edit(props.category.id));
        navigator(`/dashboard/update`);
    }
    return <tr>
        <th scope="row">{props.category.id}</th>
        <td>{props.category.name}</td>
        <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-warning" onClick={onUpdateHandler}>Update</button>
            <button type="button" class="btn btn-danger" onClick={onDeleteHandler}>Delete</button>
        </div>
        </td>
    </tr>
}
export default CategoryRow;