import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-left">
      <h1 className="text-9xl font-bold text-[--main] mb-6">404</h1>
      <p className="text-lg text-text-secondary mb-6 text-center">
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[--main] text-white rounded-xl shadow hover:bg-[--main-dark] transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
