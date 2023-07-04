const { MongoClient } = require("mongodb");

const url = `mongodb://nodeclass2:404mCemTHmS4WPGq@cluster0-shard-00-00.ogjsn.mongodb.net:27017,cluster0-shard-00-01.ogjsn.mongodb.net:27017,cluster0-shard-00-02.ogjsn.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  keepAlive: true,
});

const database = client.db("react_project_2023");

const Users = database.collection("Users");

const Quizes = database.collection("Quizes");
const Resume = database.collection("Resume");
const Todo = database.collection("Todo");
const Attendance = database.collection("Attendance");
const Ticket = database.collection("Ticket");

module.exports = { Users, Quizes,Resume,Todo,Attendance,Ticket };
