import { Button } from '../../components/button/Button';
import '../../assets/styles/global-styles.css';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/clans');
  };


  return (
      <div className="text-center">
        <h1>Bienvenido</h1>
        <h3>Acá podrás ver diferentes clanes que existen en clash of clans</h3>
        <div className="content-center p-5">
          <Button
            onClick={handleOnClick}>
            Acceda a la búsqueda de clanes
          </Button>
        </div>
      </div>
  )
}
