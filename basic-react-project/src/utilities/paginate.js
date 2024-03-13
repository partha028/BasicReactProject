import _ from "lodash";

const Paginate = (currentPage, pageSize, movies) => {
    const startIndex = pageSize * (currentPage - 1);
    return _(movies).slice(startIndex).take(pageSize).value();
}
 
export default Paginate;