
import { Input } from './../../components/input/Input';
import { Dropdown } from './../../components/input/Dropdown';
import { DropdownItem } from './../../components/input/DropdownItem';
import { Button } from './../../components/button/Button';
import '../../assets/styles/global-styles.css';
import { Card } from './../../components/card/Card';
export const ClansScreen = () => {
  return (
    <>
      <div className="content-center mt-3 mb-3"><h2>Buscar Clanes</h2></div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Input placeholder="Ingrese el nombre" />
        </div>
        <div className="col-md-4 mb-3">
          <Dropdown text="warFrequency">
            <DropdownItem text="Frecuencia de guerra" selected />
            <DropdownItem text="Siempre" value="2" />
            <DropdownItem text="Uno por semana" value="3" />
            <DropdownItem text="Más de uno por semana" value="4" />
            <DropdownItem text="Nunca" value="4" />
            <DropdownItem text="Desconocido" value="5" />
          </Dropdown>
        </div>
        <div className="col-md-4 mb-3">
          <Input placeholder="Nivel mínimo del clan" />
        </div>
      </div>
      <div className="col-md-12 d-grid gap-2 content-center">
        <Button className="mt-3">Buscar</Button>
      </div>
      <div className="row mt-3">
        <div className="col-md-3 mb-3">
          <Card cardName="hola mundo" cardText="lorem ipsum" cardLevel={1} cardFrequency="siempre" />
        </div>
        <div className="col-md-3 mb-3">
          <Card cardName="hola mundo" cardText="lorem ipsum" cardLevel={1} cardFrequency="siempre"/>
        </div>
        <div className="col-md-3 mb-3">
          <Card cardName="hola mundo" cardText="lorem ipsum" cardLevel={1} cardFrequency="siempre" />
        </div>
        <div className="col-md-3 mb-3">
          <Card cardName="hola mundo" cardText="lorem ipsum" cardLevel={1} cardFrequency="siempre" />
        </div>
      </div>
    </>
  )
}
