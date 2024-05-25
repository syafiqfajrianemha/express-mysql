require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const usersRoutes = require('./routes/users')

const middlewareLogRequest = require('./middleware/log')
const upload = require('./middleware/multer')

const app = express()

app.use(middlewareLogRequest)
app.use(express.json())
app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes)
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'Upload file success'
  })
})

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`)
})