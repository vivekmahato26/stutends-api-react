const mongoDb = require("mongodb");

const { Ticket, Users } = require("../mongoDB");

const add = async (req) => {
    try {
        if (!req.isAuth) throw new Error("Please Login");
        const data = await Ticket.insertOne({...req.body});
        const userId = new mongoDb.ObjectId(req.userId)
        const updateUser = await Users.findOneAndUpdate({_id:userId},{
            $push:{
                tickets: data.insertedId.toString()
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
    const data = await Ticket.find({})
      .skip(skip ? skip : 0)
      .limit(limit ? limit : 0)
      .toArray();
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const update = async (req) => {};

module.exports = { add, getAll, update };
