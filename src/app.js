const express = require('express');

class AppController {
  constructor(){
    this.express = express();
    this.middleware();
    this.router();
    
  }

  middleware(){
    this.express.use(express.json());
  }
  router(){
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
 