const db = require('../data/data-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){

    return db('schemes')
};
function findById(id){
};
function findSteps(id){};
function add(scheme){};
function update(changes, id){};
function remove(id){};


// function getPosts(userId) {
//   return db('posts as p')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'u.username', 'p.contents')
//     .where({ 'u.id': userId });
// }
