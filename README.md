## NTTDATA Clash of clans frontend

Frontend:
- JavaScript
- Typescript
- React
- Axios
- Context
- HTML
- Bootstrap
- CSS3

Backend (Proxy CORS):
- Node Js
- Express
- Axios

## Notes

Clone this repository

Go to the backend folder and change the value of the key COC_API_TOKEN in the file .env with your developer key-token of COC. https://developer.clashofclans.com/#/login

Then execute into Backend folder:
```
npm install
npm start
```
Backend port localhost:4000.

You can filter by each of the following filters: name, warFrequency and minClanLevel or by all.
Api endpoint example by filter clans:
- http://localhost:4000/api/clans?name=Kingsguard&warFrequency=always&minClanLevel=9
- http://localhost:4000/api/clans?name=Kingsguard&warFrequency=always
- http://localhost:4000/api/clans?name=Kingsguard
filter params: name, warFrequency and minClanLevel.


Execute into Frontend folder:
```
npm install
npm start
```
Frontend port localhost:3000