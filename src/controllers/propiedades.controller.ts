import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Propiedades} from '../models';
import {PropiedadesRepository} from '../repositories';

export class PropiedadesController {
  constructor(
    @repository(PropiedadesRepository)
    public propiedadesRepository : PropiedadesRepository,
  ) {}

  @post('/propiedades', {
    responses: {
      '200': {
        description: 'Propiedades model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propiedades)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propiedades, {
            title: 'NewPropiedades',
            exclude: ['id'],
          }),
        },
      },
    })
    propiedades: Omit<Propiedades, 'id'>,
  ): Promise<Propiedades> {
    return this.propiedadesRepository.create(propiedades);
  }

  @get('/propiedades/count', {
    responses: {
      '200': {
        description: 'Propiedades model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Propiedades)) where?: Where<Propiedades>,
  ): Promise<Count> {
    return this.propiedadesRepository.count(where);
  }

  @get('/propiedades', {
    responses: {
      '200': {
        description: 'Array of Propiedades model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Propiedades)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Propiedades)) filter?: Filter<Propiedades>,
  ): Promise<Propiedades[]> {
    return this.propiedadesRepository.find(filter);
  }

  @patch('/propiedades', {
    responses: {
      '200': {
        description: 'Propiedades PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propiedades, {partial: true}),
        },
      },
    })
    propiedades: Propiedades,
    @param.query.object('where', getWhereSchemaFor(Propiedades)) where?: Where<Propiedades>,
  ): Promise<Count> {
    return this.propiedadesRepository.updateAll(propiedades, where);
  }

  @get('/propiedades/{id}', {
    responses: {
      '200': {
        description: 'Propiedades model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propiedades)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Propiedades> {
    return this.propiedadesRepository.findById(id);
  }

  @patch('/propiedades/{id}', {
    responses: {
      '204': {
        description: 'Propiedades PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propiedades, {partial: true}),
        },
      },
    })
    propiedades: Propiedades,
  ): Promise<void> {
    await this.propiedadesRepository.updateById(id, propiedades);
  }

  @put('/propiedades/{id}', {
    responses: {
      '204': {
        description: 'Propiedades PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propiedades: Propiedades,
  ): Promise<void> {
    await this.propiedadesRepository.replaceById(id, propiedades);
  }

  @del('/propiedades/{id}', {
    responses: {
      '204': {
        description: 'Propiedades DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propiedadesRepository.deleteById(id);
  }
}
