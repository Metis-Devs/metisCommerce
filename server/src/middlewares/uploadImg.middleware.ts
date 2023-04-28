import multer from 'multer'
import path from 'path'

export const uploadImg = multer({
    storage: multer.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, 'public/images')
        },
        filename: (_req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 5000000
    },
    fileFilter: (_req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimType = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname))
        if(mimType && extName){
            return cb(null, true)
        } else {
            cb(new Error('Give proper files format to upload'))
        }
    }
}).single('image')