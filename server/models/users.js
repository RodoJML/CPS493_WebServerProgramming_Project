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
    const users = await col.find().toArray();
    const total = await col.countDocuments();
    return { users, total };
}

module.exports = {
    getAll
}