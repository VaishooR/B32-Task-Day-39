[
    {
        "name":"User 1",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"present",
        "codekata":{
            "solved":65,
            "notSolved":35,
            "total":100
        },
        "task-submitted":20,
        "task-submit-date":"2020-10-18"
    },
    {
        "name":"User 2",
        "course":"Full stack development",
        "batch":"b32",
        "language":"Tamil",
        "attendance":"absent",
        "codekata":{
            "solved":35,
            "notSolved":65,
            "total":100
        },
        "task-submitted":18,
        "task-submit-date":"2020-10-08",
    },
    {
        "name":"User 3",
        "course":"Full stack development",
        "batch":"b32",
        "language":"Tamil",
        "attendance":"present",
        "codekata":{
            "solved":98,
            "notSolved":2,
            "total":100
        },
        "task-submitted":31,
        "task-submit-date":"2020-10-15",
    },
    {
        "name":"User 4",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"present",
        "codekata":{
            "solved":8,
            "notSolved":92,
            "total":100
        },
        "task-submitted":5,
        "task-submit-date":"2020-10-22",
    },
    {
        "name":"User 5",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"absent",
        "codekata":{
            "solved":78,
            "notSolved":22,
            "total":100
        },
        "task-submitted":23,
        "task-submit-date":"2020-10-03",
    },
    {
        "name":"User 6",
        "course":"Full stack development",
        "batch":"b32",
        "language":"Tamil",
        "attendance":"present",
        "codekata":{
            "solved":25,
            "notSolved":75,
            "total":100
        },
        "task-submitted":29,
        "task-submit-date":"2020-10-5",
    },
    {
        "name":"User 7",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"absent",
        "codekata":{
            "solved":44,
            "notSolved":56,
            "total":100
        },
        "task-submitted":21,
        "task-submit-date":"2020-10-28",
    },
    {
        "name":"User 8",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"absent",
        "codekata":{
            "solved":0,
            "notSolved":100,
            "total":100
        },
        "task-submitted":30,
        "task-submit-date":"2020-10-16",
    },
    {
        "name":"User 9",
        "course":"Full stack development",
        "batch":"b32",
        "language":"English",
        "attendance":"present",
        "codekata":{
            "solved":100,
            "notSolved":0,
            "total":100
        },
        "task-submitted":31,
        "task-submit-date":"2020-10-31",
    },
    {
        "name":"User 10",
        "course":"Full stack development",
        "batch":"b32",
        "language":"Tamil",
        "attendance":"present",
        "codekata":{
            "solved":39,
            "notSolved":61,
            "total":100
        },
        "task-submitted":14,
        "task-submit-date":"2020-10-10",
    },
    
]


// QUESTIONS:
// 1.Find the number of problems solved by the user in codekata.
// 2.Find the number of users who are absent and task submitted  between 15 oct-2020 and 31-oct-2020



// Question-1:
// Find the number of problems solved by the user in codekata.

Query:
db.users.find({batch:"b32"},{name:1,"codekata.solved":1,_id:0});

Output:
// { "name" : "User 1", "codekata" : { "solved" : 65 } }
// { "name" : "User 2", "codekata" : { "solved" : 35 } }
// { "name" : "User 3", "codekata" : { "solved" : 98 } }
// { "name" : "User 4", "codekata" : { "solved" : 8 } }
// { "name" : "User 5", "codekata" : { "solved" : 78 } }
// { "name" : "User 6", "codekata" : { "solved" : 25 } }
// { "name" : "User 7", "codekata" : { "solved" : 44 } }
// { "name" : "User 8", "codekata" : { "solved" : 0 } }
// { "name" : "User 9", "codekata" : { "solved" : 100 } }
// { "name" : "User 10", "codekata" : { "solved" : 39 } }

// ------------------------------------------------------------------------------





// Question-2:
// Find the number of users who are absent.

Query:
db.users.find({attendance:"absent"},{name:1,attendance:1,_id:0}).toArray();

Output:
[
        {
                "name" : "User 2",
                "attendance" : "absent"
        },
        {
                "name" : "User 5",
                "attendance" : "absent"
        },
        {
                "name" : "User 7",
                "attendance" : "absent"
        },
        {
                "name" : "User 8",
                "attendance" : "absent"
        }
]
// --------------------------------------------------------------------------------------





// Question-3:
// Find the number of users who are absent and task submitted  between 15 oct-2020 and 31-oct-2020

Query:
db.users.find({
    $and:
        [
            {attendance: "absent"},
            {"task-submit-date":{$gte:'2020-10-15',$lte:'2020-10-31'}}
        ]
    })


Output:
db.users.find({$and:[{attendance: "absent"},{"task-submit-date":{$gte:'2020-10-15',$lte:'2020-10-31'}}]}).toArray();
[
        {
                "_id" : ObjectId("62ea3c36161faa86a45d1a56"),
                "name" : "User 7",
                "course" : "Full stack development",
                "batch" : "b32",
                "language" : "English",
                "attendance" : "absent",
                "codekata" : {
                        "solved" : 44,
                        "notSolved" : 56,
                        "total" : 100
                },
                "task-submitted" : 21,
                "task-submit-date" : "2020-10-28"
        },
        {
                "_id" : ObjectId("62ea3c36161faa86a45d1a57"),
                "name" : "User 8",
                "course" : "Full stack development",
                "batch" : "b32",
                "language" : "English",
                "attendance" : "absent",
                "codekata" : {
                        "solved" : 0,
                        "notSolved" : 100,
                        "total" : 100
                },
                "task-submitted" : 30,
                "task-submit-date" : "2020-10-16"
        }
]
// -----------------------------------------------------------------------------






Query:
 db.users.find({$and:[{attendance: "absent"},{"task-submit-date":{$gte:'2020-10-15',$lte:'2020-10-31'}}]},{name:1,attendance:1,"task-submit-date":1,_id:0}).toArray();

Output:
[
        {
                "name" : "User 7",
                "attendance" : "absent",
                "task-submit-date" : "2020-10-28"
        },
        {
                "name" : "User 8",
                "attendance" : "absent",
                "task-submit-date" : "2020-10-16"
        }
]