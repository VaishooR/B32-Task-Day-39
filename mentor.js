[
    {
        "mentor":"Mentor-1",
        "mentees_count":10,
        "topic":"Javascript",
        "task":"pagination",
        "month":"October",
    },
    {
        "mentor":"Mentor-2",
        "mentees_count":25,
        "topic":"Javascript",
        "task":"functions",
        "month":"November",
    },
    {
        "mentor":"Mentor-3",
        "mentees_count":18,
        "topic":"MongoDB",
        "task":"database",
        "month":"October",
    },
    {
        "mentor":"Mentor-4",
        "mentees_count":32,
        "topic":"HTML",
        "task":"website",
        "month":"December",
    },
    {
        "mentor":"Mentor-5",
        "mentees_count":13,
        "topic":"React",
        "task":"Shopping-cart",
        "month":"October",
    },
]




// QUESTIONS:

// 1.Find all the topics and tasks which are thought in the month of October

Query:

db.mentor.find({month:"October"},{topic:1,task:1,month:1,_id:0}).toArray();

Output:
[
        {
                "topic" : "Javascript",
                "task" : "pagination",
                "month" : "October"
        },
        {
                "topic" : "MongoDB",
                "task" : "database",
                "month" : "October"
        },
        {
                "topic" : "React",
                "task" : "Shopping-cart",
                "month" : "October"
        }
]





// -------------------------------------------------------------------
// 2.Find all the mentors with who has the mentee's count more than 15

Query:

db.mentor.find({"mentees_count":{$gt:15}},{mentor:1,"mentees_count":1,_id:0}).toArray();

Output:
[
        {
                "mentor" : "Mentor-2",
                "mentees_count" : 25
        },
        {
                "mentor" : "Mentor-3",
                "mentees_count" : 18
        },
        {
                "mentor" : "Mentor-4",
                "mentees_count" : 32
        }
]




