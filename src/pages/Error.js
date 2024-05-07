import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Could not find resource";
  }

  return (
    <>
      <MainNavigation />
        <p style={{textAlign: "center", fontSize: 30}}>{message}</p>
    </>
  );
};

export default ErrorPage;
