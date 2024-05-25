const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime()
    const originalName = file.originalname

    cb(null, `${timestamp}-${originalName}`)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000 * 1000 // 2 MB
  }
})

module.exports = upload