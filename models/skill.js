 const skills = [
   {id: 1, skill: 'HTML programming', years: 8},
   {id: 2, skill: 'JS programming', years: 3},
   {id: 3, skill: 'SQL queries', years: 3}
 ];
 
 module.exports = {
    getAll,
    getOne,
    create
 };
 
 function getAll() {
   return skills;
 }

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = (skills.length) + 1;
  skills.push(skill);
}
