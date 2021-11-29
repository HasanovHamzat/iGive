const hospitalRouter = require("express").Router();
const {
  getSessionHospital,
  logoutHospital,
  addHospitalData,
  showHospitalAllEvents,
  addDonationFromEvent,
  getAllArchiveEvents,
  addNewEvent,
  getAllSubscribeUsers,
  closeEvent,
  getStorageData,
  changeHospitalData,
  changeProfileImage,
} = require("../controllers/hospital.controller");
const { showDetailEvent } = require("../controllers/user.controller");

hospitalRouter.route("/").get(getSessionHospital);
hospitalRouter.route("/profile").get(getSessionHospital).post(addHospitalData);
hospitalRouter.route("/profile/data").patch(changeHospitalData);
hospitalRouter.route("/events").get(showHospitalAllEvents);
hospitalRouter.route("/events/new").post(addNewEvent);
hospitalRouter.route("/events/archive").get(getAllArchiveEvents);
hospitalRouter.route("/events/:id").get(showDetailEvent);
hospitalRouter.route("/events/:id/status").patch(closeEvent);
hospitalRouter.route("/events/:id/users").get(getAllSubscribeUsers);
hospitalRouter.route("/events/:id/donation").post(addDonationFromEvent);
hospitalRouter.route("/storage").get(getStorageData);
hospitalRouter.route("/logout").get(logoutHospital);
hospitalRouter.route("/profile/data/image").patch(changeProfileImage);

module.exports = hospitalRouter;
