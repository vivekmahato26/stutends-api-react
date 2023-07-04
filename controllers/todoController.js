const mongoDb = require("mongodb");

const { Todo, Users } = require("../mongoDB");

const add = async (req) => {
    try {
        if (!req.isAuth) throw new Error("Please Login");
        const data = await Todo.insertOne({...req.body});
        const userId = new mongoDb.ObjectId(req.userId)
        const updateUser = await Users.findOneAndUpdate({_id:userId},{
            $push:{
                todo: data.insertedId.toString()
            }
        })
        return data;
      } catch (error) {
        console.log(error);
        return { err: error.message };
      }
};
const getAll = async (req) => {
  try {
    if (!req.isAuth) throw new Error("Please Login");
    const { limit, skip } = req.query;
    const data = await Todo.find({})
      .skip(skip ? skip : 0)
      .limit(limit ? limit : 0)
      .toArray();
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};

const get = async (req) => {
    try {
      if (!req.isAuth) throw new Error("Please Login");
      const todoId = new mongoDb.ObjectId(req.params.todoId)
      const data = await Todo.findOne({_id:todoId})
      return data;
    } catch (error) {
      console.log(error);
      return { err: error.message };
    }
  };
const update = async (req) => {};

module.exports = { add, getAll, update,get };
