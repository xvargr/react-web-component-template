import {
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "react-router-dom";

export default function ErrorBoundary() {
  const location = useLocation();
  const error = useRouteError();
  let errorMessage = "An unexpected error has ocurred";
  console.log(error);

  if (isRouteErrorResponse(error)) {
    errorMessage = `Error ${error.status}: ${error.statusText}`;
  } else if (error instanceof ReferenceError) {
    errorMessage = error.message;
  } else if (error instanceof Error) {
    errorMessage = `${error.name}: ${error.message}`;
  } else if (error instanceof Response) {
    errorMessage = `Error ${error.status}: ${error.statusText}`;
  }

  return (
    <div className="bg-red-500 text-red-100 rounded-xl shadow m-4 p-2 bg-opacity-90">
      <h2 className="font-semibold text-md mb-2">
        Oops, something went wrong... 😢
      </h2>
      <div>{errorMessage}</div>
      <hr className="border-red-200 border-dotted m-2" />
      <small>{location.pathname}</small>
    </div>
  );
}
