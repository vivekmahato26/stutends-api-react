const {Router} = require("express");

const { add, getAll, update,get } = require("../controllers/attendanceController");

const attendanceRouter = new Router();

attendanceRouter.post("/add", async (req,res) => {
    try {
        const data = await add(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
attendanceRouter.get("/attendance", async (req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
attendanceRouter.get("/attendance/:attendanceId", async (req,res) => {
    try {
        const data = await get(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
attendanceRouter.put("/update", async (req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports =  attendanceRouter;
