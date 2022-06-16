import { AxiosResponse } from 'axios';
import axiosHttp from '../axios';
import IClan, { IFilters } from './../types/IClans';

class ClanService {
    getClansByFilters(name?: string, warFrequency?: string, minClanLevel?: number) {
        const params: IFilters = {};
        if(name) params.name = name;
        if(warFrequency) params.warFrequency = warFrequency;
        if(minClanLevel) params.minClanLevel = minClanLevel;

        return axiosHttp.get<IClan[]>(`/clans`,
            {
                params
            }
        ).then((response: AxiosResponse) => {
            return response.data;
        });
    }
}

export default new ClanService();