
const mssql = require("mssql");
const sqlConfig = require("../Config/index");

class Connection {
  constructor() {
     this.connectToDb();
  }

  connectToDb = async () => {
    try {
      this.pool =await mssql.connect(sqlConfig);
     
    } catch (error) {
      throw new Error(error.message);
    }
  };
  createRequest = async (request, data = {}) => {
    //append the inputs to the request return request
    const keys = Object.keys(data);
    keys.map((keyName) => {
      const keyValue = data[keyName];
      request.input(keyName, keyValue);
    })
    return request;
  };
  executeRequest = async (storedProcedure, data = {}) => {
    try {
      let requestObj = await this.pool.request();
      let request = await this.createRequest(requestObj, data);
      const result = await request.execute(storedProcedure);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  query = async (query) => {
    try {
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
module.exports ={
    exec: new Connection().executeRequest,
    query: new Connection().query
}