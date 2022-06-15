const baseURL = 'https://api.clashofclans.com';

const getClansEndpoint = () => `${ baseURL }/v1/clans`;

module.exports = {
    getClansEndpoint
}