 const skills = [
   {id: 1, skill: 'HTML programming', years: 8},
   {id: 2, skill: 'JS programming', years: 3},
   {id: 3, skill: 'SQL queries', years: 3}
 ];
 
 module.exports = {
    getAll,
    getOne
 };
 
 function getAll() {
   return skills;
 }

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find(skill => skill.id === id);
}
