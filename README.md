QUESTIONS:

Find all the topics and tasks which are thought in the month of October

Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

Find all the company drives and students who are appeared for the placement.

Find the number of problems solved by the user in codekata

Find all the mentors with who has the mentee's count more than 15

Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020





QUERIES:

db.mentor.find({month:"October"},{topic:1,task:1,month:1,_id:0}).toArray();

db.companies.find({date:{$gte:'2020-10-15',$lte:'2020-10-31'}},{company:1,date:1,_id:0}).toArray();

db.companies.find({},{company:1,"students_appeared":1,_id:0}).toArray();

db.users.find({batch:"b32"},{name:1,"codekata.solved":1,_id:0});

db.mentor.find({"mentees_count":{$gt:15}},{mentor:1,"mentees_count":1,_id:0}).toArray();

db.users.find({$and:[{attendance: "absent"},{"task-submit-date":{$gte:'2020-10-15',$lte:'2020-10-31'}}]}).toArray();


