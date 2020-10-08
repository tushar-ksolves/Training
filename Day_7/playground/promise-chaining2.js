require('../task-manager/src/db/mongoose');
const Task = require('../task-manager/src/models/task');

// Task.findByIdAndDelete('5f7dfa4ad45d7529f48d0c63').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5f7e056088bfc02e7056f5d2').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
