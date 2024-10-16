import { ChevronLeft } from '@/core/utilities/Icons';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className='btn btn-outline pr-6'
      onClick={e => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <ChevronLeft className='size-5' />
      Back
    </button>
  );
}

export { BackButton };
