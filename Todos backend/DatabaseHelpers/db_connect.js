const mssql = require("mssql");
const sqlConfig = require("../Config/index");

class Connection {
  constructor() {
    this.connectToDB();
  }
  connectToDB = async () => {
    try {
        console.log('executing');
      this.pool = await mssql.connect(sqlConfig);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  createRequestObj = (request, data) => {
    let KeyNames = Object.keys(data);
    KeyNames.map((name) => {
      let value = data[name];
      request.input(name, value);
    });
    return request;
  };
  executeRequest = async (storedProc, data = {}) => {
    
    const requestObj = await this.pool.request();
    const request = await this.createRequestObj(requestObj, data);
    return request.execute(storedProc);
  };
  query= (query)=>{
    return this.pool.request().query(query)
  }
}

module.exports = {
    exec: new Connection().executeRequest,
    query: new Connection().query,
  };
  
