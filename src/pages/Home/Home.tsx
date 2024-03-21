import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { convertDate } from "../../utils/dateUtils";
import { removeUserToken } from "../../utils/storageUtils";
import { setUser } from "../../store/authSlice";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    // For testing only
    removeUserToken();
    dispatch(setUser(null));
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome, {user?.name}!</h2>
      <h2>Email: {user?.email}</h2>
      <h2>Gender: {user?.gender}</h2>
      <h2>Region: {user?.region}</h2>
      <h2>State: {user?.state}</h2>
      {user?.createdAt && <h2>Created at: {convertDate(user.createdAt)}</h2>}
      <button onClick={handleLogout}>Logout Test</button>
    </div>
  );
}
