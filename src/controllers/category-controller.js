import axios from "axios";
import Category from "../models/Category";
class CategoryController {
    async create(category) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.post(`https://ws-tasks-app-default-rtdb.firebaseio.com/categories.json?auth=${token}`,
                {
                    name: category.name,
                });
            console.log(response.data);
            if (response.status == 200) {
                return response.data.name;
            }
        }
        catch (error) {
            return null;
        }
    }
    async read() {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.get(`https://ws-tasks-app-default-rtdb.firebaseio.com/categories.json?auth=${token}`);
            if (response.data.length != 0) {
                let categories = [];
                for (let key in response.data) {
                    let category = new Category();
                    category.id = key;
                    category.name = response.data[key].name;
                    categories.push(category);
                }
                return categories;
            }
            return [];
        } catch (error) {

        }
    }
    async update(category) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.put(`https://ws-tasks-app-default-rtdb.firebaseio.com/categories/${category.id}.json?auth=${token}`,
                {
                    name: category.name,
                });
            return true;
        } catch (error) {
            return false;
        }
    }
    async delete(id) {
        let token = localStorage.getItem("token");
        try {
            let response = await axios.delete(`https://ws-tasks-app-default-rtdb.firebaseio.com/categories/${id}.json?auth=${token}`)
            return true;
        } catch (error) {
            return false;
        }
    }
}
export default CategoryController;