const express = require('express')

const UserController = require('../controller/users.js')

const router = express.Router()

// CREATE - POST
router.post('/', UserController.createNewUser)

// READ - GET
router.get('/', UserController.getAllUsers)

// UPDATE - PATCH
router.patch('/:id', UserController.updateUser)

// DELETE - PATCH
router.delete('/:id', UserController.deleteUser)

module.exports = router