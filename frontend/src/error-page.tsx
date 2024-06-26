import { useRouteError } from "react-router-dom";

interface ErrorType {
  statusText?: string;
  message?: string;
  status?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} {error.statusText || error.message}</i>
      </p>
    </div>
  );
}