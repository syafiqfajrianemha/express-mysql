const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const [users] = await UsersModel.getAllUser()

    res.json({
      message: 'GET all users success',
      data: users
    })
  } catch (error) {
    res.json({
      message: 'Server Error',
      serverMessage: error
    }, 500)
  }
}

const createNewUser = async (req, res) => {
  const {body} = req

  if (!body.name || !body.email || !body.address) {
    return res.json({
      message: 'Anda mengirimkan data yang salah',
      data: null
    }, 400)
  }
  
  try {
    await UsersModel.createNewUser(body)

    res.json({
      message: 'CREATE new user success',
      data: body
    }, 201)
  } catch (error) {
    res.json({
      message: 'Server Error',
      serverMessage: error
    }, 500)
  }
}

const updateUser = async (req, res) => {
  const {body} = req
  const {id} = req.params
  
  try {
    await UsersModel.updateUser(body, id)

    res.json({
      message: 'UPDATE user success',
      data: {
        id: id,
        ...body
      }
    })
  } catch (error) {
    res.json({
      message: 'Server Error',
      serverMessage: error
    }, 500)
  }
}

const deleteUser = async (req, res) => {
  const {id} = req.params
  
  try {
    await UsersModel.deleteUser(id)

    res.json({
      message: 'DELETE user success',
      data: {
        id: id
      }
    })
  } catch (error) {
    res.json({
      message: 'Server Error',
      serverMessage: error
    }, 500)
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}