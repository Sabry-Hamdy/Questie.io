import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 flex items-center text-brand-primary"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </button>
  );
}
