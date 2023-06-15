import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryController from "../../controllers/category-controller";
import { categoriesActions } from "../../redux/categories-slic";
import CategoryRow from "../categories/CategoryRow";

let CategoriesPage = () => {
    let categories = useSelector((state) => state.categories.data);
    let dispatch = useDispatch();
    let categoryControler = new CategoryController();

    let fetchData = async () => {
        if (categories.length == 0) {
            let categories = await categoryControler.read();
            dispatch(categoriesActions.read(categories));
        } 
    }
    useEffect(() => { fetchData(); }, []);
    return <Fragment>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Categories</h1>
            </div>
            <div className="row mt-5">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((element) => (
                            <CategoryRow key={element.id} category={element} />))}
                    </tbody>
                </table>
                {/* {categories.map((element) => (
                    <CategoryItem key={element.id} category={element} />))} */}

            </div>
        </main>
    </Fragment>
}
export default CategoriesPage;