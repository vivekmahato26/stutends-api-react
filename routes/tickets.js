const {Router} = require("express");

const { add, getAll, update,get } = require("../controllers/ticketsController");

const ticketsRouter = new Router();

ticketsRouter.post("/add", async (req,res) => {
    try {
        const data = await add(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
ticketsRouter.get("/tickets", async (req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
ticketsRouter.get("/ticket/:ticketId", async (req,res) => {
    try {
        const data = await get(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
ticketsRouter.put("/update", async (req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err);
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports =  ticketsRouter;
