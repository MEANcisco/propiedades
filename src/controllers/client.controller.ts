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
import {Clientes} from '../models';
import {ClientesRepository} from '../repositories';

export class ClientController {
  constructor(
    @repository(ClientesRepository)
    public clientesRepository: ClientesRepository,
  ) {}

  @post('/clientes', {
    responses: {
      '200': {
        description: 'Clientes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clientes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clientes, {
            title: 'NewClientes',
          }),
        },
      },
    })
    clientes: Clientes,
  ): Promise<Clientes> {
    return this.clientesRepository.create(clientes);
  }

  @get('/clientes/count', {
    responses: {
      '200': {
        description: 'Clientes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clientes))
    where?: Where<Clientes>,
  ): Promise<Count> {
    return this.clientesRepository.count(where);
  }

  @get('/clientes', {
    responses: {
      '200': {
        description: 'Array of Clientes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clientes)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clientes))
    filter?: Filter<Clientes>,
  ): Promise<Clientes[]> {
    return this.clientesRepository.find(filter);
  }

  @patch('/clientes', {
    responses: {
      '200': {
        description: 'Clientes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clientes, {partial: true}),
        },
      },
    })
    clientes: Clientes,
    @param.query.object('where', getWhereSchemaFor(Clientes))
    where?: Where<Clientes>,
  ): Promise<Count> {
    return this.clientesRepository.updateAll(clientes, where);
  }

  @get('/clientes/{id}', {
    responses: {
      '200': {
        description: 'Clientes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clientes)}},
      },
    },
  })
  async findById(@param.path.number('id') id: any): Promise<Clientes> {
    return this.clientesRepository.findById(id);
  }

  @patch('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Clientes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clientes, {partial: true}),
        },
      },
    })
    clientes: Clientes,
  ): Promise<void> {
    await this.clientesRepository.updateById(id, clientes);
  }

  @put('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Clientes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: any,
    @requestBody() clientes: Clientes,
  ): Promise<void> {
    await this.clientesRepository.replaceById(id, clientes);
  }

  @del('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Clientes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: any): Promise<void> {
    await this.clientesRepository.deleteById(id);
  }
}
