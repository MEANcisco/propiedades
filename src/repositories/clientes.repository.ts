import {DefaultCrudRepository} from '@loopback/repository';
import {Clientes, ClientesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype.Tipocli,
  ClientesRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Clientes, dataSource);
  }
}
