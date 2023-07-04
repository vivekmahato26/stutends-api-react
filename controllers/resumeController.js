const mongoDb = require("mongodb");
const { Resume, Users } = require("../mongoDB");

const add = async (req) => {
    try {
        if (!req.isAuth) throw new Error("Please Login");
        const data = await Resume.insertOne({...req.body,userId: req.userId});
        const userId = new mongoDb.ObjectId(req.userId)
        const updateUser = await Users.findOneAndUpdate({_id:userId},{
            $set:{
                resumeId: data.insertedId.toString()
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
    const data = await Resume.findOne({userId: req.userId});

    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const update = async (req) => {
    try {
        if (!req.isAuth) throw new Error("Please Login");
        const data = await Resume.findOneAndReplace({userId: req.userId},{...req.body,userId:req.userId});
        return data;
      } catch (error) {
        console.log(error);
        return { err: error.message };
      }
};

module.exports = { add, getAll, update };
