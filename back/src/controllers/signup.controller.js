const bcrypt = require('bcryptjs');
const { User, Hospital, BloodStorage } = require('../db/models');

async function signUpUser(req, res) {
  try {
    const {
      name,
      lastName,
      birthday,
      email,
      password,
      phoneNumber,
      city,
      street,
      building,
      oms,
      bloodTypeId,
    } = req.body;
    const pass = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      name,
      lastName,
      birthday,
      email,
      password: pass,
      phoneNumber,
      city,
      street,
      building,
      oms,
      bloodTypeId,
    });
    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
      city: newUser.city,
      bloodTypeId: newUser.bloodTypeId,
      role: 'user',
    };
    res.json(req.session.user);
  } catch (err) {
    res.sendStatus(500);
  }
}

async function signUpHospital(req, res) {
  try {
    const {
      email,
      password,
      inn,
      headOfDep,
      phoneNumber,
      city,
      street,
      building,
      webSite,
      title,
    } = req.body;
    const pass = await bcrypt.hash(password, 5);
    const newHospital = await Hospital.create({
      email,
      password: pass,
      inn,
      headOfDep,
      phoneNumber,
      city,
      street,
      building,
      webSite,
      title,
    });
    req.session.hospital = {
      id: newHospital.id,
      email: newHospital.email,
      inn: newHospital.inn,
      city: newHospital.city,
      headOfDep: newHospital.headOfDep,
      role: 'hospital',
    };
    await BloodStorage.bulkCreate([
      { bloodTypeId: 1, hospitalId: req.session.hospital.id },
      { bloodTypeId: 2, hospitalId: req.session.hospital.id },
      { bloodTypeId: 3, hospitalId: req.session.hospital.id },
      { bloodTypeId: 4, hospitalId: req.session.hospital.id },
      { bloodTypeId: 5, hospitalId: req.session.hospital.id },
      { bloodTypeId: 6, hospitalId: req.session.hospital.id },
      { bloodTypeId: 7, hospitalId: req.session.hospital.id },
      { bloodTypeId: 8, hospitalId: req.session.hospital.id },
    ]);
    res.json(req.session.hospital)
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  signUpUser,
  signUpHospital,
};
