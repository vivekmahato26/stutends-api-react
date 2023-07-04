const {Router} = require("express");

const { add, getAll, update } = require("../controllers/resumeController");

const resumeRouter = new Router();

resumeRouter.post("/add", async (req,res) => {
    try {
        const data = await add(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
resumeRouter.get("/resume", async (req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
resumeRouter.put("/update", async (req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports =  resumeRouter;
