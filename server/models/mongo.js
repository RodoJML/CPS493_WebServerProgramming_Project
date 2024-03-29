const { MongoClient , ObjectId } = require('mongodb');

const url = process.env.MONGO_URL ?? "";
const DB_Name = process.env.DB_NAME ?? 'CalC';

const client = new MongoClient(url);

async function connect() {
    const database = await client.connect();
    return database.db(DB_Name);
}

module.exports = {
    connect, ObjectId, DB_Name
};