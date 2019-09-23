import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Propublic extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  Precio?: number;

  @property({
    type: 'number',
  })
  Accessos?: number;

  @property({
    type: 'number',
  })
  Ba?: number;

  @property({
    type: 'number',
  })
  Pisos?: number;

  @property({
    type: 'number',
    required: true,
  })
  Hab: number;

  @property({
    type: 'number',
  })
  Eveh?: number;

  @property({
    type: 'boolean',
  })
  Pisc?: boolean;

  @property({
    type: 'string',
  })
  Pobla?: string;

  @property({
    type: 'string',
  })
  Fot?: string;

  @property({
    type: 'string',
  })
  Colecfoto?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Propublic>) {
    super(data);
  }
}

export interface PropublicRelations {
  // describe navigational properties here
}

export type PropublicWithRelations = Propublic & PropublicRelations;
