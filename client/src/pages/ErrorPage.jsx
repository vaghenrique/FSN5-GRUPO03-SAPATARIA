import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
        <div className="body">
          
        </div>

    );
  }
  return <div>Error generico</div>;
}

export default ErrorPage