import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function ConfirmDelete({ onClose, action, message, itemId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(action(itemId));
    toast.success('Item deleted successfully');
    onClose();
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-brand-primary">
        Confirm Delete
      </h2>
      <p className="mb-6 text-text-secondary">{message}</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="rounded-lg bg-background-tertiary px-4 py-2 text-text-primary transition-colors hover:bg-slate-600"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </>
  );
}
