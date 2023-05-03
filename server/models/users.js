const data = require('../data/users.json');
// This will be used only to seed the DB now 

const jwt = require('jsonwebtoken');
const { connect, ObjectId } = require('./mongo');
const { env } = require('process');

const COLLECTION_NAME = "users";

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(){
    const col = await collection();
    const objects = await col.find().toArray();
    const total = await col.countDocuments();
    return { objects, total };
}

async function getById(id){
    const col = await collection();
    const object = await col.findOne({ _id: ObjectId(id) });
    return object;
}

async function add(user){
    const col = await collection();
    const object = await col.insertOne(user);
    user._id = object.insertedId;
    return user;
}

async function update(user){
    const col = await collection();
    const result = await col.findOneAndUpdate({ _id: ObjectId(user._id) }, { $set: user }, { returnDocument: 'after' });
    return result.value;
}

async function remove(id){
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

async function seed(){
    const col = await collection();
    const result = await col.insertMany(data.users);
    return result.insertedCount;
}

async function search(seachTerm, page = 1, pageSize = 30){
    const col = await collection();
    const query = {
        $or: [
            { id: { $regex: searchTerm, $options: 'i'} },
            { name: { $regex: searchTerm, $options: 'i'}},
            { email: { $regex: searchTerm, $options: 'i'} },
            { user: { $regex: searchTerm, $options: 'i'} },
        ]
    }

    const objects = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { objects, total };
}

async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    if (user.password !== password) {
        throw new Error('Invalid password');
    }

    const cleanUser = { ...user, password: undefined };
    const token = await generateTokenAsync(cleanUser, '1d'); // 1d stands for the duration of the token in this case 1 day

    return { user: cleanUser, token };
}

function generateTokenAsync(user, expiresIn) { // As professor explain here we are cerating our own async function
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user
    // if not, create a new user
    // return the user
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove,
    search,
    seed,
    login,
    generateTokenAsync,
    verifyTokenAsync,
    oAuthLogin
}