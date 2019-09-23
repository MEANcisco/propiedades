import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Propiedades extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  Propietario?: string;

  @property({
    type: 'string',
  })
  Carpet?: string;

  @property({
    type: 'string',
  })
  Rol?: string;

  @property({
    type: 'string',
  })
  Codigo?: string;

  @property({
    type: 'string',
    required: true,
  })
  Tn: string;

  @property({
    type: 'string',
  })
  TP?: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;

  @property({
    type: 'string',
  })
  Estado?: string;

  @property({
    type: 'boolean',
  })
  Publicada?: boolean;

  @property({
    type: 'string',
  })
  Disp?: string;

  @property({
    type: 'number',
  })
  AC?: number;

  @property({
    type: 'number',
  })
  MT?: number;

  @property({
    type: 'number',
  })
  MC?: number;

  @property({
    type: 'string',
  })
  Fojas?: string;

  @property({
    type: 'boolean',
  })
  Fojv?: boolean;

  @property({
    type: 'string',
  })
  FojN?: string;

  @property({
    type: 'number',
  })
  FojA?: number;

  @property({
    type: 'number',
  })
  Accesos?: number;

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
  })
  Hab?: number;

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
  Calle?: string;

  @property({
    type: 'number',
  })
  Numero?: number;

  @property({
    type: 'string',
  })
  Comuna?: string;

  @property({
    type: 'string',
  })
  Obs?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Propiedades>) {
    super(data);
  }
}

export interface PropiedadesRelations {
  // describe navigational properties here
}

export type PropiedadesWithRelations = Propiedades & PropiedadesRelations;
