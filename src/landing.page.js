import Login from "./components/Login/Login";
export const LandingPage = (props) => {
  return (
    <div>
      <Login history={props.history} />
      {/* <button
        type="submit"
        className="btn btn-success btnLogin"
        onClick={() => {
          auth.login(() => {
            props.history.push("/user");
          });
        }}
      >
        Login
      </button> */}
    </div>
  );
};
