import {DefaultCrudRepository} from '@loopback/repository';
import {Propublic, PropublicRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PropublicRepository extends DefaultCrudRepository<
  Propublic,
  typeof Propublic.prototype.Precio,
  PropublicRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Propublic, dataSource);
  }
}
