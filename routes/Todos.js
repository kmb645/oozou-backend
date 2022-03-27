const express = require('express')
const router = express.Router()
const { Todos, Subtasks } = require('../models')

 router.get('/', async (req, res) => {
  const todoList = await Todos.findAll({include: [Subtasks]});
  res.json({todoList: todoList})
 });

 router.post('/todosStatus', async (req, res) => {
   if(req.body.status == 'pending'){
      UpStatus = 'completed'
    }else{
        UpStatus = 'pending'
    }
    UpId = req.body.id
    await Todos.update(
      {status:UpStatus},
      {where:{id:UpId}
    })
  res.json({status:UpStatus,id:UpId})
 });

 router.post('/subtasksStatus', async (req, res) => {
    if(req.body.status == 'pending'){
      UpStatus = 'completed'
    }else{
      UpStatus = 'pending'
    }
    UpId = req.body.id
  await Subtasks.update(
    {status:UpStatus},
    {where:{id:UpId}
  })
 res.json({status:UpStatus,id:UpId})
});


 
 

router.post('/', async (req, res) => {
  const todoData = req.body
  await Todos.create(todoData).then((result) => {
    lastId = result.id;
    sendTodos = {...todoData, id:lastId, Subtasks:[]}
    res.json(sendTodos)
  })
});
// router.put()
// router.delete()

module.exports = router;