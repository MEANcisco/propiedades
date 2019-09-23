import {DefaultCrudRepository} from '@loopback/repository';
import {Propiedades, PropiedadesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PropiedadesRepository extends DefaultCrudRepository<
  Propiedades,
  typeof Propiedades.prototype.id,
  PropiedadesRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Propiedades, dataSource);
  }
}
