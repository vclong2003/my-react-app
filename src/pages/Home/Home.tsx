import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Home() {
  const { user } = useSelector((state: RootState) => state.authSlice);

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome, {user?.name}!</h2>
    </div>
  );
}
