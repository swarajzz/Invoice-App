import { Link } from "react-router-dom";

function Error() {

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%MESSAGE%</p>
      <Link to="/auth/login">&larr; Go back to login</Link>
    </div>
  );
}

export default Error;
