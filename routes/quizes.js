const {Router} = require("express");

const { addQuiz, getAll, update } = require("../controllers/quizesController");

const quizesRouter = new Router();

quizesRouter.post("/add", async (req,res) => {
    try {
        const data = await addQuiz(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
quizesRouter.get("/quizes", async (req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
quizesRouter.put("/update", async (req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports =  quizesRouter;
