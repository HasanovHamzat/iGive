const userRouter = require('express').Router();
const {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
  getUserAllArchiveEvents,
  subscribeUser,
  changeProfileData,
  changeProfileImage,
  unsubscribeUser,
  getHospitalAddress,
  getAllUserSubcribingEvent,
} = require('../controllers/user.controller');

userRouter.route('/').get(getSessionUser);
userRouter.route('/myevents').get(getAllUserSubcribingEvent);
userRouter.route('/profile').get(getSessionUser).post(addUserData);
userRouter.route('/profile/data').patch(changeProfileData);
userRouter.route('/profile/data/image').patch(changeProfileImage);
userRouter.route('/events').get(showUserAllEvents);
userRouter.route('/events/archive').get(getUserAllArchiveEvents);
userRouter.route('/events/:id').get(showDetailEvent);
userRouter.route('/events/:id/map').get(getHospitalAddress);
userRouter
  .route('/events/:id/subscribe')
  .post(subscribeUser)
  .delete(unsubscribeUser);
userRouter.route('/logout').get(logoutUser);

module.exports = userRouter;
