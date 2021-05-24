// import { useHistory } from "react-router-dom";


export default function Logout() {
  // const history = useHistory();
  localStorage.removeItem("ACCESS_TOKEN");
  // history.push("/login")
}



