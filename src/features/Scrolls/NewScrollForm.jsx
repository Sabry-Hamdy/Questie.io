import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addScroll } from './scrollsSlice';
import { toast } from 'react-toastify';
import StyledInput from '../../components/StyledInput';
import FormHeader from '../../components/FormHeader';
import Form from '../../components/Form';
import FormButtons from '../../components/FormButtons';

export default function NewScroll() {
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState({
    title: '',
    tome: '',
    content: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteData.title || !noteData.content) {
      toast.error('Please fill in all fields');
      return;
    }

    const newNote = {
      id: Date.now(),
      title: noteData.title,
      tome: noteData.tome || 'Personal Tome',
      content: noteData.content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addScroll(newNote));

    toast.success('🎉 New Scroll Added! Your wisdom is now recorded.');

    navigate('/scrolls');
  };

  return (
    <div className="py-6">
      <FormHeader
        headText="Scribe New Scroll"
        paragraphText="Record your wisdom and knowledge"
      />

      <Form onSubmit={handleSubmit}>
        <StyledInput
          label="Scroll Title"
          type="text"
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
          placeholder="Enter the title of your scroll..."
        />

        <StyledInput
          label="Magic Tome"
          component="select"
          value={noteData.tome}
          onChange={(e) => setNoteData({ ...noteData, tome: e.target.value })}
          options={[
            { value: '', label: 'Select a tome...' },
            { value: 'Work Grimoire', label: 'Work Grimoire' },
            { value: 'Personal Tome', label: 'Personal Tome' },
            { value: 'Study Spellbook', label: 'Study Spellbook' },
          ]}
        />

        <StyledInput
          label="Scroll Contents"
          component="textarea"
          value={noteData.content}
          onChange={(e) =>
            setNoteData({ ...noteData, content: e.target.value })
          }
          placeholder="Write your wisdom here..."
        />

        <FormButtons actionText={'Save Scroll'} />
      </Form>
    </div>
  );
}
