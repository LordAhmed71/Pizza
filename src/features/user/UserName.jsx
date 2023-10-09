import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

function Username() {
  const { userName } = useSelector(getUser);
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
