const {Logger} = require('../config');
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try{
        const resp = await this.model.create(data);
        return resp;
    }catch(err){
        Logger.error("Something went wrong in Crud Repo : create");
        throw err;
    }
  }

  async destroy(data){
    try{
        const resp = await this.model.destroy({where:{
            id:data}});
        return resp;
    }catch(err){
        Logger.error("Something went wrong in Crud Repo : destroy");
        throw err;
    }
  }

  async get(data){
    try{
        const resp = await this.model.findByPK(data);
        return resp;
    }catch(err){
        Logger.error("Something went wrong in Crud Repo : get");
        throw err;
    }
  }

  async getAll(){
    try{
        const resp = await this.model.findAll();
        return resp;
    }catch(err){
        Logger.error("Something went wrong in Crud Repo : getAll");
        throw err;
    }
  }

  async update(id, data){
    try{
        const resp = await this.model.update(data,{where:{
            id:id,
        }});
        return resp;
    }catch(err){
        Logger.error("Something went wrong in Crud Repo : Update");
        throw err;
    }
  }
}

module.exports = CrudRepository;
