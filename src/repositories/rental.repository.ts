import { DefaultCrudRepository } from '@loopback/repository';
import { Rental, RentalRelations } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class RentalRepository extends DefaultCrudRepository<
  Rental,
  typeof Rental.prototype.id,
  RentalRelations
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rental, dataSource);
  }
}
