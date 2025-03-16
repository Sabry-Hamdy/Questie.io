import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Edit, MoreVertical, Trash } from 'lucide-react';

import Menu from '../../components/Menu';
import ErrorMessage from '../../components/ErrorMessage';
import ConfirmDelete from '../../components/ConfirmDelete';
import BackButton from '../../components/BackButton';
import Modal from '../../components/Modal';

import { deleteScroll } from './scrollsSlice';

export default function ScrollPreview() {
  const { scrollId } = useParams();
  const navigate = useNavigate();

  const scroll = useSelector((state) =>
    state.scrolls.scrolls.find((n) => Number(n.id) === Number(scrollId)),
  );

  if (!scroll) {
    return <ErrorMessage message="Scroll not found" />;
  }

  const handleEdit = () => {
    navigate(`/scrolls/edit/${scrollId}`);
  };

  return (
    <Modal>
      <div className="py-6">
        <BackButton to={'/scrolls'} />

        <div className="mb-6 flex items-center justify-between">
          <header>
            <h1 className="text-2xl font-bold text-brand-primary">
              {scroll.title}
            </h1>
            <p className="text-text-secondary">{scroll.tome}</p>
          </header>

          <div className="relative">
            <Menu>
              <Menu.Toggle id={scroll.id} icon={MoreVertical} />

              <Menu.List id={scroll.id}>
                <Menu.Item onClick={handleEdit}>
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Menu.Item>

                <Modal.Open opens="scroll-delete" itemId={scroll.id}>
                  <Menu.Item danger={true}>
                    <Trash className="mr-2 h-4 w-4" /> Delete
                  </Menu.Item>
                </Modal.Open>
              </Menu.List>
            </Menu>
          </div>
        </div>

        <div className="rounded-lg bg-background-secondary p-4">
          <p className="text-text-primary">{scroll.content}</p>
        </div>

        <footer className="mt-4 text-text-secondary">
          Created on: {new Date(scroll.createdAt).toLocaleDateString()}
        </footer>

        <Modal.Window name="scroll-delete">
          <ConfirmDelete
            action={deleteScroll}
            message="Are you sure you want to delete this scroll?"
          />
        </Modal.Window>
      </div>
    </Modal>
  );
}
