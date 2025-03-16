import { useState } from 'react';
import StyledInput from '../../components/StyledInput';
import { Trash } from 'lucide-react';
import FormHeader from '../../components/FormHeader';
import Form from '../../components/Form';
import FormButtons from '../../components/FormButtons';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { addQuest } from './questsSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NewQuestForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('apprentice');
  const [dueDate, setDueDate] = useState('');
  const [subquests, setSubquests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuest = {
      id: Date.now(),
      title,
      description,
      difficulty,
      dueDate:
        dueDate !== '' ? new Date(dueDate) : new Date().toLocaleDateString(),
      completed: false,
      subquests,
    };

    dispatch(addQuest(newQuest));

    toast.success('Your quest-log now has a new quest, Good luck!');

    navigate('/quests');
  };

  const handleAddSubquest = () => {
    setSubquests([
      ...subquests,
      { id: Date.now(), title: '', completed: false },
    ]);
  };

  const handleSubquestChange = (index, value) => {
    const newSubquests = [...subquests];
    newSubquests[index].title = value;
    setSubquests(newSubquests);
  };

  const handleDeleteSubquest = (id) => {
    const newSubquests = subquests.filter((subquest) => subquest.id !== id);
    setSubquests(newSubquests);
  };

  return (
    <div className="py-6">
      <FormHeader
        headText={'Create New Quest'}
        paragraphText={'Embark on a new adventure by defining your quest'}
      />

      <Form onSubmit={handleSubmit}>
        <StyledInput
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for your quest (required)"
          required
        />

        <StyledInput
          label="Description"
          component="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description for your quest (optional)"
        />

        <StyledInput
          label="Difficulty"
          component="select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          options={[
            { value: 'unknown', label: 'Unknown' },
            { value: 'novice', label: 'Novice' },
            { value: 'apprentice', label: 'Apprentice' },
            { value: 'expert', label: 'Expert' },
            { value: 'legendary', label: 'Legendary' },
          ]}
        />

        <StyledInput
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mb-10"
        />

        <div className="">
          {subquests.length > 0 && (
            <>
              <h4 className="mb-2 text-lg font-semibold text-white">
                Subquests
              </h4>

              {subquests.map((subquest, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <StyledInput
                    type="text"
                    value={subquest.title}
                    onChange={(e) =>
                      handleSubquestChange(index, e.target.value)
                    }
                    placeholder={`Subquest ${index + 1}`}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => handleDeleteSubquest(subquest.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <Trash />
                  </button>
                </div>
              ))}
            </>
          )}

          <Button
            type="button"
            onClick={handleAddSubquest}
            variation={'accent-blue'}
          >
            Add Subquest
          </Button>
        </div>

        <FormButtons actionText={'Add Quest'} />
      </Form>
    </div>
  );
}
