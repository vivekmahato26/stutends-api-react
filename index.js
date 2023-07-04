const express = require("express")
const {json,urlencoded} = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const quizesRouter = require("./routes/quizes");
const resumeRouter = require("./routes/resume");
const auth = require("./middleware/auth");

const app = express();
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());

app.use(auth)

app.use("/users",userRouter);
app.use("/quizes",quizesRouter);
app.use("/resume",resumeRouter);

app.listen("4202", () => console.log("Server running at port 4202"))