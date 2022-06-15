const axios = require('axios');
const { getClansEndpoint } = require("../config");
require('dotenv').config();

/**
 * Returns a list of products depending on your search parameters
 * @param {*} req request
 * @param {*} res response
 * @returns a list products
 */
const getClans = async (req = request, res = response) => {
    const { name, warFrequency, minClanLevel } = req.query;
  try {
    const instance = axios.create({
        baseURL: getClansEndpoint(),
        params: {
          name,
          warFrequency,
          minClanLevel
        },
        headers: {
            Authorization: 'Bearer ' + process.env.COC_API_TOKEN
        }
      });
  
    const { data } = await instance.get();

    return res.json(data)
  } catch (error) {
    return res.json({message: error.message + ". Search by name, warFrequency, minClanLevel params"});
  }
};

module.exports = {
    getClans
}