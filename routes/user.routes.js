import express from 'express'
import _userCtrl from '../controllers/user.controller'
import _authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
      .get(_userCtrl.list)
      .post(_userCtrl.create)
      
router.route('/api/users/:userId')
      .get(_authCtrl.requireSignin,_userCtrl.read)

router.route('/api/users/:userId')
      .put(_authCtrl.requireSignin, _authCtrl.hasAuthorization,_userCtrl.update)

router.route('/api/users/:userId')
      .delete(_authCtrl.requireSignin, _authCtrl.hasAuthorization,_userCtrl.remove)

router.param('userId', _userCtrl.userByID)


export default router