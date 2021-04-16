import { isEmptyList } from "../../utils";
import Network from "../../services/Network";
import { GET_STUDENTS } from "../../config/endpoints";

const segregateByKey = (array, key, sort) => {
    const object = array.reduce((accu, curr) => {
        if (isEmptyList(accu[curr[key]])) accu[curr[key]] = [];
        accu[curr[key]].push(curr);
        return accu;
    }, {});
    return sort ? Object.keys(object).sort().reduce((accu, key) => ({ ...accu, [key]: object[key] }), {}) : object;
}

const processData = students => {
    const classes = segregateByKey(students, 'class');

    Object.keys(classes).forEach(key => {
        classes[key] = segregateByKey(classes[key], 'section', true);
    });

    return classes;
}

export const fetchStudents = async () => processData(await Network.GET(GET_STUDENTS));