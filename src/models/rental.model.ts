import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Rental extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  numGuests?: number;

  @property({
    type: 'number',
  })
  numBedrooms?: number;

  @property({
    type: 'number',
  })
  numBaths?: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<Rental>) {
    super(data);
  }
}

export interface RentalRelations {
  // describe navigational properties here
}

export type RentalWithRelations = Rental & RentalRelations;
