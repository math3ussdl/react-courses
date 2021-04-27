import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { Container } from './styles';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <Container>
      <SyncLoader color="#845ec2" loading={loading} size={15} />
    </Container>
  );
};

export default Loader;
