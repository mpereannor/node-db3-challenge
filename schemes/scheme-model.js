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

function findSteps(id) {

    /*
    SELECT  
        st.id as stepId,
        sc.scheme_name as schemeName,
        st.step_number as stepNumber,
        st.instructions as instructions
    FROM 
        steps as st
    JOIN 
        schemes as sc 
    ON
        sc.id = st.scheme_id
    WHERE  
        st.scheme_id = id
    ORDER BY  
    st.step_number;
    */

    return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select(
        'st.id as stepId',
        'sc.scheme_name as schemeName',
        'st.step_number as stepNumber', 'st.instructions as instructions'
        )
    .where('st.scheme_id', id)
    .orderBy('st.step_number', 'asc')
}

function add(scheme){
   return db('schemes')
   .insert(scheme)
   .then( id => { 
       return findById(id[0]);
   });    
};

function update(changes, id){ 
    return db(changes, id)
    .where({id})
    .update(changes)
    .then(count => { 
        return findById(id)
    })
}

function remove(id) {
    return db('schemes')
    .where('id', id).del()
}
