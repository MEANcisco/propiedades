import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Clientes extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  Tipocli?: string;

  @property({
    type: 'string',
  })
  rut?: string;

  @property({
    type: 'string',
  })
  Nombre?: string;

  @property({
    type: 'string',
  })
  Apellidos?: string;

  @property({
    type: 'string',
  })
  Sexo?: string;

  @property({
    type: 'date',
  })
  Fnacimi?: string;

  @property({
    type: 'string',
  })
  Naciona?: string;

  @property({
    type: 'string',
  })
  Poblacion?: string;

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
  email: string;

  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
