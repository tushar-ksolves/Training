require('../task-manager/src/db/mongoose');
const User = require('../task-manager/src/models/user');

// User.findByIdAndUpdate('5f7e02f8249ecd3dec436f79', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });

    return count;
}

updateAgeAndCount('5f7e02f8249ecd3dec436f79', 5).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})