import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops!!</h1>
      <h2>Somethinh went wrong - Details below:</h2>
      <h3>{err.status + " : " + err.error.message}</h3>
    </div>
  );
};
export default Error;
