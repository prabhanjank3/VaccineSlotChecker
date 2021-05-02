import axios from "axios";

const Server_URL = "https://0f97w.sse.codesandbox.io";
const AuthenticateUser = (credentials) => {
  return axios.get(
    Server_URL +
      "/auth?email=" +
      credentials.email +
      "&password=" +
      credentials.password
  );
};
const SubmitNewUserRequest = (newUserDetails) => {
  return axios.post(Server_URL + "/auth", newUserDetails, {
    headers: {
      "Content-type": "application/json"
    }
  });
};
const cowinapi = (values) => {
  return axios.get(
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" +
      values.pincode +
      "&date=" +
      values.date
  );
};
const sendAlert = (email) => {
  return axios.get(
    "https://myemailserver.herokuapp.com/mail?toaddress=" + email
  );
};
export { AuthenticateUser, SubmitNewUserRequest, cowinapi, sendAlert };
