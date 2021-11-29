import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { hospitalOut } from '../../redux/ac/hospitalAC';
import { userOut } from '../../redux/ac/userAC';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role } = useParams();

  useEffect(() => {
    if (role === 'user') {
      dispatch(userOut());
    } else if (role === 'hospital') {
      dispatch(hospitalOut());
    }
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Logout;
