const {Router} = require("express");
const { register, login, get, getAll, update } = require("../controllers/userControllers");

const userRouter = new Router();

userRouter.post("/register", async(req,res) => {
    try {
        const data = await register(req);
        if(data.err) throw new Error(data.err)
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
userRouter.post("/login", async(req,res) => {
    try {
        const data = await login(req);
        if(data.err) throw new Error(data.err)
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
userRouter.get("/user", async(req,res) => {
    try {
        const data = await get(req);
        if(data.err) throw new Error(data.err)
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
userRouter.get("/users", async(req,res) => {
    try {
        const data = await getAll(req);
        if(data.err) throw new Error(data.err)
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})
userRouter.put("/update", async(req,res) => {
    try {
        const data = await update(req);
        if(data.err) throw new Error(data.err)
        res.send(data);
    } catch (error) {
        res.send({err: error.message})
    }
})

module.exports = userRouter;