import { isEmptyList } from "../../utils";

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

export const fetchStudents = async () => Promise.resolve(processData(sample));

const sample = [
    {
        "name": "Rahul",
        "class": 3,
        "gender": "M",
        "section": "B",
        "rollNumber": "1231",
        "sports": [
            "Badminton",
            "Chess"
        ],
        "age": 7
    },
    {
        "name": "Rajat",
        "class": 5,
        "gender": "M",
        "section": "C",
        "rollNumber": "123122",
        "sports": [
            "Chess"
        ],
        "age": 9
    },
    {
        "name": "Rajani",
        "class": 8,
        "gender": "F",
        "section": "D",
        "rollNumber": "1122",
        "sports": [
            "Chess"
        ],
        "age": 12
    },
    {
        "name": "Rajanikanth",
        "class": 8,
        "gender": "M",
        "section": "B",
        "rollNumber": "0022",
        "sports": [
            "Cricket"
        ],
        "age": 12
    },
    {
        "name": "Nisha",
        "class": 2,
        "gender": "F",
        "section": "A",
        "rollNumber": "72622",
        "sports": [
            "Table Tennis"
        ],
        "age": 6
    },
    {
        "name": "Prashant",
        "class": 4,
        "gender": "M",
        "section": "A",
        "rollNumber": "74422",
        "sports": [
            "Tennis"
        ],
        "age": 8
    },
    {
        "name": "Ravi",
        "class": 8,
        "gender": "M",
        "section": "A",
        "rollNumber": "70822",
        "sports": [
            "Soccer"
        ],
        "age": 12
    },
    {
        "name": "Nishant",
        "class": 3,
        "gender": "M",
        "section": "I",
        "rollNumber": "11822",
        "sports": [
            "Soccer"
        ],
        "age": 7
    },
    {
        "name": "Niti",
        "class": 3,
        "gender": "F",
        "section": "J",
        "rollNumber": "131822",
        "sports": [
            "Badminton"
        ],
        "age": 7
    },
    {
        "name": "Sahil",
        "class": 5,
        "gender": "M",
        "section": "J",
        "rollNumber": "21822",
        "sports": [
            "Swimming"
        ],
        "age": 9
    },
    {
        "name": "Ashu",
        "class": 5,
        "gender": "M",
        "section": "J",
        "rollNumber": "27522",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess"
        ],
        "age": 9
    },
    {
        "name": "Ashutosh",
        "class": 11,
        "gender": "M",
        "section": "J",
        "rollNumber": "28722",
        "sports": [
            "Chess"
        ],
        "age": 15
    },
    {
        "name": "Raj",
        "class": 1,
        "gender": "M",
        "section": "F",
        "rollNumber": "2752922",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess"
        ],
        "age": 5
    },
    {
        "name": "Kumar",
        "class": 7,
        "gender": "M",
        "section": "I",
        "rollNumber": "2922",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess",
            "Tennis"
        ],
        "age": 11
    },
    {
        "name": "Akhil",
        "class": 5,
        "gender": "M",
        "section": "F",
        "rollNumber": "99622",
        "sports": [
            "Swimming",
            "Chess"
        ],
        "age": 9
    },
    {
        "name": "Richa",
        "class": 4,
        "gender": "F",
        "section": "E",
        "rollNumber": "2836",
        "sports": [
            "Swimming"
        ],
        "age": 8
    },
    {
        "name": "Priyanka",
        "class": 4,
        "gender": "F",
        "section": "G",
        "rollNumber": "283236",
        "sports": [
            "Chess"
        ],
        "age": 8
    },
    {
        "name": "Priyan",
        "class": 8,
        "gender": "M",
        "section": "H",
        "rollNumber": "83538",
        "sports": [
            "Table Tennis"
        ],
        "age": 12
    },
    {
        "name": "Priyan",
        "class": 10,
        "gender": "M",
        "section": "J",
        "rollNumber": "832538",
        "sports": [
            "Tennis"
        ],
        "age": 14
    },
    {
        "name": "PriyanK",
        "class": 4,
        "gender": "M",
        "section": "K",
        "rollNumber": "8336538",
        "sports": [
            "Tennis"
        ],
        "age": 8
    },
    {
        "name": "Ekta",
        "class": 2,
        "gender": "F",
        "section": "M",
        "rollNumber": "8362",
        "sports": [
            "Badminton"
        ],
        "age": 6
    },
    {
        "name": "Anju",
        "class": 3,
        "gender": "F",
        "section": "D",
        "rollNumber": "832162",
        "sports": [
            "Badminton"
        ],
        "age": 7
    },
    {
        "name": "Shruti",
        "class": 12,
        "gender": "F",
        "section": "M",
        "rollNumber": "8362",
        "sports": [
            "Table Tennis"
        ],
        "age": 16
    },
    {
        "name": "Palak",
        "class": 11,
        "gender": "F",
        "section": "M",
        "rollNumber": "813362",
        "sports": [
            "Cricket"
        ],
        "age": 15
    },
    {
        "name": "Rupali",
        "class": 6,
        "gender": "F",
        "section": "M",
        "rollNumber": "83123222",
        "sports": [
            "Chess"
        ],
        "age": 10
    },
    {
        "name": "Nandini",
        "class": 11,
        "gender": "F",
        "section": "C",
        "rollNumber": "298237",
        "sports": [
            "Swimming"
        ],
        "age": 15
    },
    {
        "name": "Raj",
        "class": 11,
        "gender": "M",
        "section": "E",
        "rollNumber": "73258237",
        "sports": [
            "Swimming"
        ],
        "age": 15
    },
    {
        "name": "Raj",
        "class": 3,
        "gender": "M",
        "section": "F",
        "rollNumber": "737",
        "sports": [
            "Swimming"
        ],
        "age": 7
    },
    {
        "name": "Raju",
        "class": 9,
        "gender": "M",
        "section": "A",
        "rollNumber": "723237",
        "sports": [
            "Swimming"
        ],
        "age": 13
    },
    {
        "name": "Raju",
        "class": 5,
        "gender": "M",
        "section": "B",
        "rollNumber": "72393677",
        "sports": [
            "Cricket"
        ],
        "age": 9
    },
    {
        "name": "Sameet",
        "class": 7,
        "gender": "M",
        "section": "C",
        "rollNumber": "038737",
        "sports": [
            "Cricket"
        ],
        "age": 11
    },
    {
        "name": "Sameer",
        "class": 12,
        "gender": "M",
        "section": "D",
        "rollNumber": "22382657",
        "sports": [
            "Cricket"
        ],
        "age": 16
    },
    {
        "name": "Sameer",
        "class": 9,
        "gender": "M",
        "section": "D",
        "rollNumber": "22334382657",
        "sports": [
            "Cricket"
        ],
        "age": 13
    },
    {
        "name": "Sameer",
        "class": 10,
        "gender": "M",
        "section": "E",
        "rollNumber": "22334382657123",
        "sports": [
            "Cricket"
        ],
        "age": 14
    },
    {
        "name": "Sameer",
        "class": 10,
        "gender": "M",
        "rollNumber": "22334382657121233",
        "section": "A",
        "sports": [
            "Cricket"
        ],
        "age": 14
    },
    {
        "name": "Sameer",
        "class": 7,
        "gender": "M",
        "rollNumber": "22331214382657123",
        "section": "A",
        "sports": [
            "Badminton"
        ],
        "age": 11
    },
    {
        "name": "Ranjan",
        "class": 4,
        "gender": "M",
        "rollNumber": "223342229922382657123",
        "section": "K",
        "sports": [
            "Badminton"
        ],
        "age": 8
    },
    {
        "name": "Ranjan",
        "class": 3,
        "gender": "M",
        "rollNumber": "223321238764382657123",
        "section": "A",
        "sports": [
            "Badminton"
        ],
        "age": 7
    },
    {
        "name": "Ranjan",
        "class": 6,
        "gender": "M",
        "rollNumber": "2233237624382657123",
        "section": "A",
        "sports": [
            "Swimming"
        ],
        "age": 10
    },
    {
        "name": "Ranjan",
        "class": 11,
        "gender": "M",
        "rollNumber": "2233657292734382657123",
        "section": "B",
        "sports": [
            "Badminton"
        ],
        "age": 15
    },
    {
        "name": "Ranjan",
        "class": 11,
        "gender": "M",
        "rollNumber": "223232329877834382657123",
        "section": "B",
        "sports": [
            "Cricket"
        ],
        "age": 15
    },
    {
        "name": "Neelu",
        "class": 5,
        "gender": "F",
        "rollNumber": "22334334567012082657123",
        "section": "B",
        "sports": [
            "Swimming"
        ],
        "age": 9
    },
    {
        "name": "Neelu",
        "class": 8,
        "gender": "F",
        "rollNumber": "22334372629282657123",
        "section": "C",
        "sports": [
            "Swimming"
        ],
        "age": 12
    },
    {
        "name": "Neelu",
        "class": 9,
        "gender": "F",
        "rollNumber": "22334380278352657123",
        "section": "D",
        "sports": [
            "Swimming"
        ],
        "age": 13
    },
    {
        "name": "Rahul",
        "class": 11,
        "gender": "M",
        "section": "B",
        "rollNumber": "12322221",
        "sports": [
            "Badminton",
            "Chess"
        ],
        "age": 15
    },
    {
        "name": "Rajat",
        "class": 4,
        "gender": "M",
        "section": "C",
        "rollNumber": "1231231312",
        "sports": [
            "Chess"
        ],
        "age": 8
    },
    {
        "name": "Rajani",
        "class": 1,
        "gender": "F",
        "section": "D",
        "rollNumber": "1987122",
        "sports": [
            "Chess"
        ],
        "age": 5
    },
    {
        "name": "Rajanikanth",
        "class": 7,
        "gender": "M",
        "section": "B",
        "rollNumber": "002215",
        "sports": [
            "Cricket"
        ],
        "age": 11
    },
    {
        "name": "Nisha",
        "class": 12,
        "gender": "F",
        "section": "A",
        "rollNumber": "726209872",
        "sports": [
            "Table Tennis"
        ],
        "age": 16
    },
    {
        "name": "Prashant",
        "class": 4,
        "gender": "M",
        "section": "A",
        "rollNumber": "74425672",
        "sports": [
            "Tennis"
        ],
        "age": 8
    },
    {
        "name": "Ravi",
        "class": 1,
        "gender": "M",
        "section": "A",
        "rollNumber": "709876822",
        "sports": [
            "Soccer"
        ],
        "age": 5
    },
    {
        "name": "Nishant",
        "class": 2,
        "gender": "M",
        "section": "I",
        "rollNumber": "11822",
        "sports": [
            "Soccer"
        ],
        "age": 6
    },
    {
        "name": "Niti",
        "class": 4,
        "gender": "F",
        "section": "J",
        "rollNumber": "1318456722",
        "sports": [
            "Badminton"
        ],
        "age": 8
    },
    {
        "name": "Sahil",
        "class": 3,
        "gender": "M",
        "section": "J",
        "rollNumber": "21567822",
        "sports": [
            "Swimming"
        ],
        "age": 7
    },
    {
        "name": "Ashu",
        "class": 10,
        "gender": "M",
        "section": "J",
        "rollNumber": "2756709522",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess"
        ],
        "age": 14
    },
    {
        "name": "Ashutosh",
        "class": 7,
        "gender": "M",
        "section": "J",
        "rollNumber": "28722",
        "sports": [
            "Chess"
        ],
        "age": 11
    },
    {
        "name": "Raj",
        "class": 4,
        "gender": "M",
        "section": "F",
        "rollNumber": "275278922",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess"
        ],
        "age": 8
    },
    {
        "name": "Kumar",
        "class": 12,
        "gender": "M",
        "section": "I",
        "rollNumber": "2926782",
        "sports": [
            "Swimming",
            "Cricket",
            "Chess",
            "Tennis"
        ],
        "age": 16
    },
    {
        "name": "Akhil",
        "class": 4,
        "gender": "M",
        "section": "F",
        "rollNumber": "99620982",
        "sports": [
            "Swimming",
            "Chess"
        ],
        "age": 8
    },
    {
        "name": "Richa",
        "class": 4,
        "gender": "F",
        "section": "E",
        "rollNumber": "569927",
        "sports": [
            "Swimming"
        ],
        "age": 8
    },
    {
        "name": "Priyanka",
        "class": 4,
        "gender": "F",
        "section": "G",
        "rollNumber": "2823233236",
        "sports": [
            "Chess"
        ],
        "age": 8
    },
    {
        "name": "Priyan",
        "class": 3,
        "gender": "M",
        "section": "H",
        "rollNumber": "835356788",
        "sports": [
            "Table Tennis"
        ],
        "age": 7
    },
    {
        "name": "Priyan",
        "class": 8,
        "gender": "M",
        "section": "J",
        "rollNumber": "832538",
        "sports": [
            "Tennis"
        ],
        "age": 12
    },
    {
        "name": "PriyanK",
        "class": 2,
        "gender": "M",
        "section": "K",
        "rollNumber": "8336452538",
        "sports": [
            "Tennis"
        ],
        "age": 6
    },
    {
        "name": "Ekta",
        "class": 7,
        "gender": "F",
        "section": "M",
        "rollNumber": "8362",
        "sports": [
            "Badminton"
        ],
        "age": 11
    },
    {
        "name": "Anju",
        "class": 12,
        "gender": "F",
        "section": "D",
        "rollNumber": "832198762",
        "sports": [
            "Badminton"
        ],
        "age": 16
    },
    {
        "name": "Shruti",
        "class": 2,
        "gender": "F",
        "section": "M",
        "rollNumber": "836452",
        "sports": [
            "Table Tennis"
        ],
        "age": 6
    },
    {
        "name": "Palak",
        "class": 8,
        "gender": "F",
        "section": "M",
        "rollNumber": "8134567362",
        "sports": [
            "Cricket"
        ],
        "age": 12
    },
    {
        "name": "Rupali",
        "class": 6,
        "gender": "F",
        "section": "M",
        "rollNumber": "831267893222",
        "sports": [
            "Chess"
        ],
        "age": 10
    },
    {
        "name": "Nandini",
        "class": 7,
        "gender": "F",
        "section": "C",
        "rollNumber": "2982098737",
        "sports": [
            "Swimming"
        ],
        "age": 11
    },
    {
        "name": "Raj",
        "class": 10,
        "gender": "M",
        "section": "E",
        "rollNumber": "732456758237",
        "sports": [
            "Swimming"
        ],
        "age": 14
    },
    {
        "name": "Raj",
        "class": 4,
        "gender": "M",
        "section": "F",
        "rollNumber": "7379876",
        "sports": [
            "Swimming"
        ],
        "age": 8
    },
    {
        "name": "Raju",
        "class": 5,
        "gender": "M",
        "section": "A",
        "rollNumber": "723453237",
        "sports": [
            "Swimming"
        ],
        "age": 9
    },
    {
        "name": "Raju",
        "class": 9,
        "gender": "M",
        "section": "B",
        "rollNumber": "723934563677",
        "sports": [
            "Cricket"
        ],
        "age": 13
    },
    {
        "name": "Sameet",
        "class": 4,
        "gender": "M",
        "section": "C",
        "rollNumber": "0380987737",
        "sports": [
            "Cricket"
        ],
        "age": 8
    },
    {
        "name": "Sameer",
        "class": 7,
        "gender": "M",
        "section": "D",
        "rollNumber": "2232382657",
        "sports": [
            "Cricket"
        ],
        "age": 11
    },
    {
        "name": "Sameer",
        "class": 1,
        "gender": "M",
        "section": "D",
        "rollNumber": "223309874382657",
        "sports": [
            "Cricket"
        ],
        "age": 5
    },
    {
        "name": "Sameer",
        "class": 1,
        "gender": "M",
        "section": "E",
        "rollNumber": "28888888888657",
        "sports": [
            "Cricket"
        ],
        "age": 5
    },
    {
        "name": "Sameer",
        "class": 4,
        "gender": "M",
        "section": "A",
        "rollNumber": "2822228888657",
        "sports": [
            "Cricket"
        ],
        "age": 8
    },
    {
        "name": "Sameer",
        "class": 10,
        "gender": "M",
        "section": "A",
        "rollNumber": "28222289876888657",
        "sports": [
            "Badminton"
        ],
        "age": 14
    },
    {
        "name": "Ranjan",
        "class": 8,
        "gender": "M",
        "section": "K",
        "rollNumber": "282838657",
        "sports": [
            "Badminton"
        ],
        "age": 12
    },
    {
        "name": "Ranjan",
        "class": 11,
        "gender": "M",
        "section": "A",
        "rollNumber": "282873563838657",
        "sports": [
            "Badminton"
        ],
        "age": 15
    },
    {
        "name": "Ranjan",
        "class": 12,
        "gender": "M",
        "section": "A",
        "rollNumber": "67898657",
        "sports": [
            "Swimming"
        ],
        "age": 16
    },
    {
        "name": "Ranjan",
        "class": 2,
        "gender": "M",
        "section": "B",
        "rollNumber": "6789809876657",
        "sports": [
            "Badminton"
        ],
        "age": 6
    },
    {
        "name": "Ranjan",
        "class": 9,
        "gender": "M",
        "rollNumber": "67898567657",
        "section": "B",
        "sports": [
            "Cricket"
        ],
        "age": 13
    },
    {
        "name": "Neelu",
        "class": 12,
        "gender": "F",
        "rollNumber": "65678782211198657",
        "section": "B",
        "sports": [
            "Swimming"
        ],
        "age": 16
    },
    {
        "name": "Neelu",
        "class": 3,
        "gender": "F",
        "rollNumber": "678986229957",
        "section": "C",
        "sports": [
            "Swimming"
        ],
        "age": 7
    },
    {
        "name": "Neelu",
        "class": 2,
        "gender": "F",
        "section": "D",
        "rollNumber": "67898456789876657",
        "sports": [
            "Swimming"
        ],
        "age": 6
    }
];