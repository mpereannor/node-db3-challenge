//Find all customers that live in London, Madrid, or Brazil

//SELECT * FROM Customers 
// WHERE city = 'London'
//  OR city = 'Madrid'
//   OR country = 'Brazil'




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
    return db('schemes')
    .where({'id' : id})
    .first();
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
