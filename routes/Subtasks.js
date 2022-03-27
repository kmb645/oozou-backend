const express = require('express')
const router = express.Router()
const { Subtasks } = require('../models')

 router.get('/', async (req, res) => {
  const subtasksList = await Subtasks.findAll();
  res.json({subtasksList: subtasksList})
 });

 

router.post('/', async (req, res) => {
  const subtasksData = req.body
  await Subtasks.create(subtasksData).then((result) => {
    let lastId = result.id  
  let sendData = {...subtasksData, id:lastId}
  res.json(sendData)
})
});

module.exports = router;