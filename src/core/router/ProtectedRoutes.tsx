import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import { ReactNode, useEffect } from 'react';

interface IProps {
  children: ReactNode;
}

function ProtectedRoutes({ children }: IProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export { ProtectedRoutes };
