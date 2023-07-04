const express = require("express")
const {json,urlencoded} = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const quizesRouter = require("./routes/quizes");
const resumeRouter = require("./routes/resume");
const auth = require("./middleware/auth");
const todoRouter = require("./routes/todo");
const attendanceRouter = require("./routes/attendance");
const ticketsRouter = require("./routes/tickets");

const app = express();
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());

app.use(auth)

app.use("/users",userRouter);
app.use("/quizes",quizesRouter);
app.use("/resume",resumeRouter);
app.use("/todo",todoRouter);
app.use("/attendance",attendanceRouter);
app.use("/tickets",ticketsRouter);

app.listen("4202", () => console.log("Server running at port 4202"))