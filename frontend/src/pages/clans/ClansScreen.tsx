
import { Input } from './../../components/input/Input';
import { Select } from '../../components/input/Select';
import { Option } from '../../components/input/Option';
import { Button } from './../../components/button/Button';
import '../../assets/styles/global-styles.css';
import { Card } from './../../components/card/Card';
import { useState } from 'react';
import { FREQUENCYS } from '../../constants';
import clanService from '../../services/clanService';
import IClan, { IFilters } from './../../types/IClans';

export const ClansScreen = () => {
  const [filters, setFilters] = useState<IFilters>({
    name: "",
    warFrequency: "",
    minClanLevel: ""
  });

  const [clans, setClans] = useState<IClan[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { name, warFrequency, minClanLevel } = filters;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = async () => {
    const result = await clanService.getClansByFilters(name, warFrequency, Number(minClanLevel));
    if (!!result?.message) {
      setErrorMessage('No se encontro información');
      setClans([]);
      return;
    }
    const clans: IClan[] = result.items;
    setClans(clans);
  };

  return (
    <>
      <div className="content-center mt-3 mb-3"><h2>Buscar Clanes</h2></div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Input
            placeholder="Ingrese el nombre"
            value={name}
            name="name"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <Select onChange={handleOnChange} name="warFrequency">
            <Option text="Frecuencia de guerra" value="" selected={warFrequency === ""} />
            {
              Object.entries(FREQUENCYS).map(item => {
                const [value, text] = item;
                return (
                  <Option key={value} text={text} value={value} selected={warFrequency === value} />
                )
              })
            }
          </Select>
        </div>
        <div className="col-md-4 mb-3">
          <Input
            type="number"
            placeholder="Nivel mínimo del clan"
            value={minClanLevel}
            name="minClanLevel"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="col-md-12 d-grid gap-2 content-center">
        <Button className="mt-3" onClick={handleFilter}>Buscar</Button>
      </div>
      <div className="row mt-3">
        {!!errorMessage && clans.length === 0 && <h1>{errorMessage}</h1>}
        {
          clans.map((clan: IClan) => {
            const { name, tag, clanLevel, warFrequency, badgeUrls: { large } } = clan;
            return (
              <div className="col-md-3 mb-3">
                <Card
                  key={tag}
                  image={large}
                  cardName={name}
                  cardTag={tag}
                  cardLevel={clanLevel}
                  cardText={FREQUENCYS[warFrequency]}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
