class Task {
    id;
    name;
    categoryId;
    categoryName;
    details;
    startDate;
    endDate;
    status;

    constructor(name, categoryId, categoryName, details, startDate, endDate) {
        this.name = name;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.details = details;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = "Waiting";
    }
}
export default Task;