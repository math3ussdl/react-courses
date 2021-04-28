import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Video from '../../components/Video';
import { logout } from '../../services/auth';
import { Body, Container, Header } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleSignOut = () => {
    logout();
    history.push('/');
  };

  return (
    <Container>
      <Header>
        <h2>ReactCourses</h2>

        <div className="right">
          <p>limabrot879@gmail.com</p>

          <button onClick={handleSignOut}>
            <FaSignOutAlt />
          </button>
        </div>
      </Header>

      <Body>
        <Video />
        <SideBar />
      </Body>
    </Container>
  );
};

export default Dashboard;
