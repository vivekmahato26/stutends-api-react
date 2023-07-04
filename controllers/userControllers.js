const { genSalt, hash, compare } = require("bcrypt");
const CryptoJs = require("crypto-js");
const mongoDb = require("mongodb");
const { Users } = require("../mongoDB");

const register = async (req) => {
  try {
    const { email, password } = req.body;
    const checkUser = await Users.find({ email }).toArray();
    if (checkUser.length) throw new Error("Email already registered");
    const salt = await genSalt();
    const hashedPass = await hash(password, salt);
    const data = await Users.insertOne({
      ...req.body,
      password: hashedPass,
      resume: null,
      todo: [],
      quizes: [],
      tickets: [],
      attendance: []
    });
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const login = async (req) => {
  try {
    const { email, password } = req.body;
    const checkUser = await Users.find({ email }).toArray();
    if (!checkUser.length) throw new Error("Email not registered");
    const { _id, password: hashedPass } = checkUser[0];
    const checkPass = await compare(password, hashedPass);
    if (!checkPass) throw new Error("Wrong Password");
    const authData = JSON.stringify({
      userId: _id,
      email: email,
    });
    const token = CryptoJs.AES.encrypt(authData, "qwertyuiop1234567890").toString();
    return {
      email,
      userId: _id,
      token,
    };
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const get = async (req) => {
  try {
    if (!req.isAuth) throw new Error("Please Login");
    const userId = new mongoDb.ObjectId(req.userId);
    const data = await Users.findOne({ _id: userId });
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const getAll = async (req) => {
  try {
    if (!req.isAuth) throw new Error("Please Login");
    const data = await Users.find({}).toArray();
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};
const update = async (req) => {
  try {
    if (!req.isAuth) throw new Error("Please Login");
    const userId = new mongoDb.ObjectId(req.userId);
    const data = await Users.findOneAndUpdate(
      { _id: userId },
      {
        $set: {},
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return { err: error.message };
  }
};

module.exports = { register, login, get, getAll, update };
