import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function NewQuestButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/quests/new')} variation={'primary'}>
      Create New Quest
    </Button>
  );
}
