const bcrypt = require('bcryptjs');
const { User, Hospital } = require('../db/models');

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const currUser = await User.findOne({ where: { email } });
    const checkPass = await bcrypt.compare(password, currUser.password);
    if (currUser && checkPass) {
      req.session.user = {
        id: currUser.id,
        name: currUser.name,
        lastName: currUser.lastName,
        email: currUser.email,
        city: currUser.city,
        bloodTypeId: currUser.bloodTypeId,
        role: 'user',
      };
      res.json(req.session.user);
    } else {
      res.json({ message: 'INVALID EMAIL OR PASSWORD' });
    }
  } catch (error) {
    res.sendStatus(500);
  }
}

async function loginHospital(req, res) {
  try {
    const { email, password } = req.body;
    const currHospital = await Hospital.findOne({ where: { email } });
    const checkPass = await bcrypt.compare(password, currHospital.password);
    if (currHospital && checkPass) {
      req.session.hospital = {
        id: currHospital.id,
        email: currHospital.email,
        inn: currHospital.inn,
        city: currHospital.city,
        headOfDep: currHospital.headOfDep,
        role: 'hospital',
      };
      res.json(req.session.hospital);
    } else {
      res.json({ message: 'INVALID EMAIL OR PASSWORD' });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


module.exports = {
  loginUser,
  loginHospital,
};
