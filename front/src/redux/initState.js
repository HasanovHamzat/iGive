const initState = {
  listHospital: [],
  event: [],
  myEvents: [],
  user: null,
  hospital: null,
  confirmedList: [],
  bloodTypes: [],
  hospitalMyDonor: [],
  coordinates: {},
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initState;
};

export default getInitState;
