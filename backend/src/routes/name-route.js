'use strict';

const express = require('express');
const nameRouter = express.Router();
const uuid = require('uuid/v4');

const Names = require('./names');

// let names = [
//   {name: 'Sam', score: '0', id:"aFASDFASDFASDF"},
//   {name: 'Corey', score: '0', id:"asdfasdfaf"},
//   {name: 'Ben', score: '0', id:"asdfasdfagsdfagf"},
//   {name: 'Evan', score: '0', id:"asdfsdfasdgasdfg"},
//   {name: 'blahblahblah', score: '0', id:""}
// ];

const name = [
  new Names ('Corey', '15'),
  new Names('Sam', '10'),
]

nameRouter.get('/names', (req,res) => {
  res.status(200).json(name);
  console.log('Got the names');
});

nameRouter.post('/names', (req, res) => {
  req.body.id = uuid();
  name.push(req.body);
  res.status(200).json(name);
});

nameRouter.delete('/names/:id', (req, res) => {
  name = name.filter(name => {
    return name.id !== req.params.id;
});
  res.status(200).json(name);
});

module.exports = nameRouter;