// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.objectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp()); 


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    console.log('Connected Correctly');

    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'buy milk'
    // }).then((result => {
    //     console.log(result);
    // })).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f7dab378e0b1538d876ea77')
    // }, {
    //     $set: {
    //         name: 'Shivam'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f7dab378e0b1538d876ea77')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').findOne(new ObjectID('5f7dafe156202b3388749cfb'), (error, task) => {
    //     if (error) {
    //         return console.log('Error while finding');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // });

    // db.collection('users').findOne({ _id: new ObjectID('5f7daeb65d0023241cda5bfe') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 23 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'buy milk',
    //         completed: false
    //     },
    //     {
    //         description: 'buy chair',
    //         completed: false
    //     },
    //     {
    //         description: 'buy cooling pad',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Error inserting');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Tony',
    //         age: 22
    //     },
    //     {
    //         name: 'Man',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Error Connecting to database');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertOne({
    //     name: 'Aru',
    //     age: 3
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert User');
    //     }

    //     console.log(result.ops);
    // })
})