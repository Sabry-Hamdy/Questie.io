import { useNavigate } from 'react-router-dom';

export default function ErrorMessage({ message }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto text-center">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{message}</span>
        <div className="mt-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-500 text-white px-4 py-2 text-md rounded hover:bg-red-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
