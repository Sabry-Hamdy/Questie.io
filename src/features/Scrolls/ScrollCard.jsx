import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, Edit, MoreVertical, Trash } from 'lucide-react';
import Menu from '../../components/Menu';
import { memo } from 'react';
import Modal from '../../components/Modal';

export default memo(function ScrollCard({ note }) {
  const navigate = useNavigate();
  const { title, tome, preview, createdAt: date, id: noteId } = note;

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/scrolls/edit/${noteId}`);
  };

  return (
    <div
      onClick={() => navigate(`/scrolls/${noteId}`)}
      className="mb-3 mr-3 cursor-pointer rounded-lg border border-border-primary bg-background-secondary p-4 transition-colors hover:border-border-hover"
    >
      <div className="mb-2 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-brand-primary" />
        <span className="text-xs text-brand-primary">{tome}</span>

        <div className="absolute right-6 top-4">
          <Menu.Toggle id={noteId} icon={MoreVertical} />

          <Menu.List id={noteId}>
            <Menu.Item onClick={handleEdit}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Menu.Item>

            <Modal.Open opens="scroll-delete" itemId={noteId}>
              <Menu.Item danger>
                <Trash className="mr-2 h-4 w-4" /> Delete
              </Menu.Item>
            </Modal.Open>
          </Menu.List>
        </div>
      </div>

      <h3 className="mb-1 font-semibold text-text-primary">{title}</h3>
      <p className="line-clamp-2 text-sm text-text-secondary">{preview}</p>

      <div className="mt-2 flex items-center gap-1 text-xs text-text-tertiary">
        <Calendar className="h-3 w-3" />
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
});
