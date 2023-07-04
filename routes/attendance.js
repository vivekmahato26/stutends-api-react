const {Router} = require("express");

const { add, getAll, update } = require("../controllers/attendanceController");

const todoRouter = new Router();

todoRouter.post("/add", async (req,res) => {
    try {
        const data = await add(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
todoRouter.get("/todo", async (req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
todoRouter.put("/update", async (req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports =  todoRouter;
