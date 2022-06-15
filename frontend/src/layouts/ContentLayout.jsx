import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from './../components/container/Container';

export const ContentLayout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
