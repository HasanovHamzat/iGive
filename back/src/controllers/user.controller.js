const { User, Event, Hospital, UserEvent } = require('../db/models');

async function getSessionUser(req, res) {
  try {
    const { id } = req.session.user;
    const currSessionUser = await User.findOne({
      where: { id },
      raw: true,
      attributes: { exclude: ['password'] },
    });
    res.json({ ...currSessionUser, role: 'user' });
  } catch (error) {
    res.sendStatus(500);
  }
}

async function logoutUser(req, res) {
  try {
    req.session.destroy();
    res.clearCookie('sid').end();
  } catch (error) {
    res.sendStatus(500);
  }
}

async function addUserData(req, res) {
  try {
    const { id } = req.session.user;
    const { image } = req.body;
    await User.update({ image }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}



async function showUserAllEvents(req, res) {
  console.log('>>>>>', req.session.user)
  ///////
  try {
    const { bloodTypeId, city } = req.session.user;
    const allEventsForUser = await Event.findAll({
      where: { bloodTypeId },
      include: { model: Hospital, where: { city } },
    });

    res.json(allEventsForUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function showDetailEvent(req, res) {
  try {
    const { id } = req.params;
    const detailEvent = await Event.findOne({ where: { id } });
    res.json(detailEvent);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getUserAllArchiveEvents(req, res) {
  try {
    const { id } = req.session.user;
    const userAllArchiveEvents = await Event.findAll({
      where: { active: false },
      include: {
        model: User,
        attributes: { exclude: ['password'] },
        where: { id },
      },
    });
    res.json(userAllArchiveEvents);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function subscribeUser(req, res) {
  try {
    const eventId = req.params.id;
    const { userId } = req.body;
    const subscriber = await UserEvent.create({ userId, eventId });
    res.json(subscriber);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function unsubscribeUser(req, res) {
  try {
    const eventId = req.params.id;
    const userId = req.session.user.id;
    await UserEvent.destroy({ where: { userId, eventId } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function changeProfileData(req, res) {
  try {
    const { id } = req.session.user;
    const { phoneNumber, city, street, building } = req.body;
    await User.update(
      { phoneNumber, city, street, building },
      { where: { id } }
    );
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function changeProfileImage(req, res) {
  try {
    const { id } = req.session.user;
    const file = req.files.file;
    console.log(process.env.PWD);
    file.mv(
      `${process.env.PWD}/public/uploads/${file.name}`,
      async (err) => {}
    );
    await User.update({ image: file.name }, { where: { id } });
    let result = await User.findOne({ where: { id } });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getHospitalAddress(req, res) {
  try {
    const { id } = req.params;
    const hospitalAddress = await Event.findByPk(id, {
      include: { model: Hospital, attributes: { exclude: ['password'] } },
    });
    res.json(hospitalAddress);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getAllUserSubcribingEvent(req, res) {
  try {
    const { id } = req.session.user;
    const allSubscribeEvent = await Event.findAll({
      include: [
        { model: User, where: { id }, attributes: ['id'] },
        { model: Hospital, attributes: ['title'] },
      ],
    });
    res.json(allSubscribeEvent);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getSessionUser,
  addUserData,
  logoutUser,
  showUserAllEvents,
  showDetailEvent,
  getUserAllArchiveEvents,
  subscribeUser,
  unsubscribeUser,
  changeProfileData,
  changeProfileImage,
  getHospitalAddress,
  getAllUserSubcribingEvent,
};
