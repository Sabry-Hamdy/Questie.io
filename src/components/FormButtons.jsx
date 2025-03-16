import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function FormButtons({ actionText }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button type="button" onClick={() => navigate(-1)} variation="secondary">
        Cancel
      </Button>

      <Button type="submit" variation={'primary'}>
        {actionText}
      </Button>
    </div>
  );
}
