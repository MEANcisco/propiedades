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
import {Propublic} from '../models';
import {PropublicRepository} from '../repositories';

export class PublicadasController {
  constructor(
    @repository(PropublicRepository)
    public propublicRepository : PropublicRepository,
  ) {}

  @post('/propublics', {
    responses: {
      '200': {
        description: 'Propublic model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propublic)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propublic, {
            title: 'NewPropublic',
            exclude: ['id'],
          }),
        },
      },
    })
    propublic: Omit<Propublic, 'id'>,
  ): Promise<Propublic> {
    return this.propublicRepository.create(propublic);
  }

  @get('/propublics/count', {
    responses: {
      '200': {
        description: 'Propublic model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Propublic)) where?: Where<Propublic>,
  ): Promise<Count> {
    return this.propublicRepository.count(where);
  }

  @get('/propublics', {
    responses: {
      '200': {
        description: 'Array of Propublic model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Propublic)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Propublic)) filter?: Filter<Propublic>,
  ): Promise<Propublic[]> {
    return this.propublicRepository.find(filter);
  }

  @patch('/propublics', {
    responses: {
      '200': {
        description: 'Propublic PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propublic, {partial: true}),
        },
      },
    })
    propublic: Propublic,
    @param.query.object('where', getWhereSchemaFor(Propublic)) where?: Where<Propublic>,
  ): Promise<Count> {
    return this.propublicRepository.updateAll(propublic, where);
  }

  @get('/propublics/{id}', {
    responses: {
      '200': {
        description: 'Propublic model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propublic)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Propublic> {
    return this.propublicRepository.findById(id);
  }

  @patch('/propublics/{id}', {
    responses: {
      '204': {
        description: 'Propublic PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propublic, {partial: true}),
        },
      },
    })
    propublic: Propublic,
  ): Promise<void> {
    await this.propublicRepository.updateById(id, propublic);
  }

  @put('/propublics/{id}', {
    responses: {
      '204': {
        description: 'Propublic PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propublic: Propublic,
  ): Promise<void> {
    await this.propublicRepository.replaceById(id, propublic);
  }

  @del('/propublics/{id}', {
    responses: {
      '204': {
        description: 'Propublic DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propublicRepository.deleteById(id);
  }
}
