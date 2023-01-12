// controllers/skills.js

const Skill = require('../models/skill');

module.exports = {
   index,
   show,
   new: newSkill,
   create
 };

 function index(req, res) {
   res.render('skills/index', {
     skills: Skill.getAll()
   });
 }



function show(req, res) {
   res.render('skills/show', {
     skill: Skill.getOne(req.params.id),
   });
}

// 'New Skill' title isnt working
function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/skills');
}

//title: 'Skill Details'

