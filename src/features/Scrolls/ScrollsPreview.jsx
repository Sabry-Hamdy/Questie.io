import { useState, memo } from 'react';
import Menu from '../../components/Menu';
import ScrollCard from './ScrollCard';
import { useNavigate } from 'react-router-dom';
import { Edit, MoreVertical, Trash } from 'lucide-react';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import { deleteScroll } from './scrollsSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export default memo(function ScrollsPreview({ note }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmDelete = () => {
    if (noteToDelete) {
      dispatch(deleteScroll(noteToDelete));
      toast.success('Scroll deleted successfully');
    }
    setIsModalOpen(false);
  };

  return <></>;
});
