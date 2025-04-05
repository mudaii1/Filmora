import { Navigate } from "react-router-dom";

function Error({ error }) {
  const navigate = Navigate();
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button
        onClick={() => navigate("/")}
        className="rounded-md bg-red-500 px-4 py-2 text-white"
      >
        Go to Home
      </button>
    </div>
  );
}

export default Error;
