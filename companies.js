[
    {
        "company":"Infosys",
        "students_appeared":["User 3","User 6","User 7"],
        "date":"2020-10-21"
    },
    {
        "company":"Amazon",
        "students_appeared":["User 2","User 4"],
        "date":"2020-11-04"
    },
    {
        "company":"Dell",
        "students_appeared":["User 1"],
        "date":"2020-10-19"
    },
    {
        "company":"Zoho",
        "students_appeared":["User 8","User 1","User 4"],
        "date":"2020-10-25"
    },
    {
        "company":"Freshworks",
        "students_appeared":["User 2","User 6","User 5","User 3"],
        "date":"2020-10-31"
    },
    {
        "company":"TCS",
        "students_appeared":["User 10","User 6","User 7","User 5"],
        "date":"2020-10-15"
    },
    {
        "company":"Google",
        "students_appeared":["User 2"],
        "date":"2020-10-11"
    },
    {
        "company":"Wipro",
        "students_appeared":["User 1","User 5","User 2"],
        "date":"2020-10-02"
    },
]

// QUESTIONS:

// 1.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.

Query:
db.companies.find({date:{$gte:'2020-10-15',$lte:'2020-10-31'}},{company:1,date:1,_id:0}).toArray();

Output:
[
        {
                "company" : "Infosys",
                "date" : "2020-10-21"
        },
        {
                "company" : "Dell",
                "date" : "2020-10-19"
        },
        {
                "company" : "Zoho",
                "date" : "2020-10-25"
        },
        {
                "company" : "Freshworks",
                "date" : "2020-10-31"
        },
        {
                "company" : "TCS",
                "date" : "2020-10-15"
        }
]





// -----------------------------------------------------------------------------
// 2.Find all the company drives and students who are appeared for the placement.

Query:
db.companies.find({},{company:1,"students_appeared":1,_id:0}).toArray();

Output:
[
        {
                "company" : "Infosys",
                "students_appeared" : [
                        "User 3",
                        "User 6",
                        "User 7"
                ]
        },
        {
                "company" : "Amazon",
                "students_appeared" : [
                        "User 2",
                        "User 4"
                ]
        },
        {
                "company" : "Dell",
                "students_appeared" : [
                        "User 1"
                ]
        },
        {
                "company" : "Zoho",
                "students_appeared" : [
                        "User 8",
                        "User 1",
                        "User 4"
                ]
        },
        {
                "company" : "Freshworks",
                "students_appeared" : [
                        "User 2",
                        "User 6",
                        "User 5",
                        "User 3"
                ]
        },
        {
                "company" : "TCS",
                "students_appeared" : [
                        "User 10",
                        "User 6",
                        "User 7",
                        "User 5"
                ]
        },
        {
                "company" : "Google",
                "students_appeared" : [
                        "User 2"
                ]
        },
        {
                "company" : "Wipro",
                "students_appeared" : [
                        "User 1",
                        "User 5",
                        "User 2"
                ]
        }
]

