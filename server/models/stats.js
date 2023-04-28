const data = require('../data/stats.json');
// This will be used only to seed the DB now 

const { connect, ObjectId } = require('./mongo');
const COLLECTION_NAME = "stats";

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

async function add(stat){
    const col = await collection();
    const object = await col.insertOne(stat);
    stat._id = object.insertedId;
    stat.id = object.insertedId;
    return stat;
}

async function update(stat){
    const col = await collection();
    const result = await col.updateOne({ id: +stat.id }, { $set: stat }, { returnDocument: 'after' });
    return result.value;
}

async function remove(id){
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedDocument;
}

async function seed(){
    const col = await collection();
    await col.insertMany(data.stats);
}

async function search(seachTerm, page = 1, pageSize = 30){
    const col = await collection();
    const query = {
        $or: [
            { id: { $regex: searchTerm, $options: 'i'}},
            { user: { $regex: searchTerm, $options: 'i'}},
            { type: { $regex: searchTerm, $options: 'i'}},
            { calories: { $regex: searchTerm, $options: 'i'}},
            { totalDishes: { $regex: searchTerm, $options: 'i'}},
            { date: { $regex: searchTerm, $options: 'i'}}
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