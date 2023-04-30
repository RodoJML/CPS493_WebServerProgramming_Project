const data = require('../data/food.json');

// This boilerplate is present in all models
const  { connect, ObjectId } = require('./mongo');
const COLLECTION_NAME = "food";

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

async function add(food){
    const col = await collection();
    const object = await col.insertOne(user);
    food._id = object.insertedId;
    return food;
}

async function update(food){
    const col = await collection();
    const result = await col.findOneAndUpdate({ _id: ObjectId(food._id) }, { $set: food }, { returnDocument: 'after' });
    return result.value;
}

async function remove(id){
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

async function seed(){
    const col = await collection();
    await col.insertMany(data.food);
}

async function search(seachTerm, page = 1, pageSize = 30){
    const col = await collection();
    const query = {
        $or: [
            { id: { $regex: searchTerm, $options: 'i'} },
            { dish: { $regex: searchTerm, $options: 'i'}},
            { calories: { $regex: searchTerm, $options: 'i'} },
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