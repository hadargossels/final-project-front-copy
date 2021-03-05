import axios from "axios";

export const fetchData = async (id) => {
  const { data } = await axios.get(
    "https://dog-store-db-default-rtdb.firebaseio.com/SHOP_DATA.json"
  );
  console.log("fetchData", data);
  return {};
};
