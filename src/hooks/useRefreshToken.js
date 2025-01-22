import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log("previous state: ", JSON.stringify(prev));
      console.log("Access Token: ", response?.data?.accessToken);
      return { ...prev, accesToken: response.data.accessToken };
    });
    return response?.data?.accesToken;
  };
  return refresh;
};

export default useRefreshToken;
