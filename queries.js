// 1.Find all the topics and tasks which are thought in the month of October
Query:
db.mentor.find({month:"October"},{topic:1,task:1,month:1,_id:0}).toArray();




// 2.Find the number of users who are absent and task submitted  between 15 oct-2020 and 31-oct-2020
Query:
db.users.find({
    $and:
        [
            {attendance: "absent"},
            {"task-submit-date":{$gte:'2020-10-15',$lte:'2020-10-31'}}
        ]
    })




// 3.Find all the topics and tasks which are thought in the month of October
Query:
db.mentor.find({month:"October"},{topic:1,task:1,month:1,_id:0}).toArray();




// 4.Find all the mentors with who has the mentee's count more than 15
Query:
db.mentor.find({"mentees_count":{$gt:15}},{mentor:1,"mentees_count":1,_id:0}).toArray();




// 5.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
Query:
db.companies.find({date:{$gte:'2020-10-15',$lte:'2020-10-31'}},{company:1,date:1,_id:0}).toArray();




// 6.Find all the company drives and students who are appeared for the placement.
Query:
db.companies.find({},{company:1,"students_appeared":1,_id:0}).toArray();
