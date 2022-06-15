const  express = require('express');
const cors = require('cors');
const routerCOC = require('./routes/coc');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.CocPath = '/api/clans';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.CocPath, routerCOC);

    this.app.use((req, res) => {
      res.status(404).json({
        message: "The route does not exist"
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on the port ${ this.port }`);
    });
  }
}


module.exports = Server;
