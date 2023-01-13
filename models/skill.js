 const skills = [
   {id: 1789, skill: 'HTML programming', years: 8},
   {id: 2123, skill: 'JS programming', years: 3},
   {id: 3981, skill: 'SQL queries', years: 3}
 ];
 
 module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
 };
 
 function getAll() {
   return skills;
 }

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
