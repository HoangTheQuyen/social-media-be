import express from 'express'
import _authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin').post(_authCtrl.signin)
router.route('/auth/signout').get(_authCtrl.signout) 

export default router