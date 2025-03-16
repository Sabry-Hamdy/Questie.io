import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Save } from 'lucide-react';
import { toast } from 'react-toastify';

import ErrorMessage from '../../components/ErrorMessage';
import { updateScroll } from './scrollsSlice';
import StyledInput from '../../components/StyledInput';
import BackButton from '../../components/BackButton';

export default function EditScroll() {
  const { scrollId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const scroll = useSelector((state) =>
    state.scrolls.scrolls.find((n) => Number(n.id) === Number(scrollId)),
  );

  const [title, setTitle] = useState(scroll ? scroll.title : '');
  const [tome, setTome] = useState(scroll ? scroll.tome : '');
  const [content, setContent] = useState(scroll ? scroll.content : '');

  if (!scroll) {
    return <ErrorMessage message="Scroll not found" />;
  }

  const handleSave = (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error('Please fill in all fields');
      return;
    }

    const updatedScroll = {
      ...scroll,
      title,
      tome,
      content,
    };

    dispatch(updateScroll({ id: scrollId, newScroll: updatedScroll }));

    toast.success('Scroll updated successfully');

    navigate(`/scrolls/${scrollId}`);
  };

  return (
    <div className="py-6">
      <BackButton to={'/scrolls'} />

      <div className="mb-6">
        <header>
          <h1 className="text-2xl font-bold text-brand-primary">Edit Scroll</h1>
        </header>
      </div>

      <form onSubmit={handleSave} action="">
        <div className="mb-4 rounded-lg bg-background-secondary p-4">
          <StyledInput
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <StyledInput
            label="Magic Tome"
            component="select"
            value={tome}
            onChange={(e) => setTome(e.target.value)}
            options={[
              { value: '', label: 'Select a tome...' },
              { value: 'Work Grimoire', label: 'Work Grimoire' },
              { value: 'Personal Tome', label: 'Personal Tome' },
              { value: 'Study Spellbook', label: 'Study Spellbook' },
            ]}
          />

          <StyledInput
            label="Content"
            component="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
        </div>

        <button
          type="submit"
          className="hover:bg-brand-secondary flex items-center rounded-lg bg-brand-primary px-4 py-2 text-white transition-colors"
        >
          <Save className="mr-2 h-5 w-5" />
          Save
        </button>
      </form>
    </div>
  );
}
