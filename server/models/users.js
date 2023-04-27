const data = require('../data/users.json');
// This will be used only to seed the DB now 

const { connect, ObjectID } = require('./mongo');
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
    const object = await col.findOne({ id: +id });
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
    const result = await col.updateOne({ id: +user.id }, { $set: user }, { returnDocument: 'after' });
    return result.value;
}

async function remove(id){
    const col = await collection();
    const result = await col.deleteOne({ id: +id });
    return result.deletedCount;
}

async function seed(){
    const col = await collection();
    await col.insertMany(data.users);
}

async function search(seachTerm, page = 1, pageSize = 30){
    const col = await collection();
    const query = {
        $or: [
            { id: { $regex: searchTerm, $options: 'i'} },
            { name: { $regex: searchTerm, $options: 'i'}},
            { email: { $regex: searchTerm, $options: 'i'} },
            { user: { $regex: searchTerm, $options: 'i'} }
        ]
    }

    const objects = await col.find(query).skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { objects, total };
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove,
    search,
    seed,
}