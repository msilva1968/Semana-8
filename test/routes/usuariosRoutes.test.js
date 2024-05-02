import request from 'supertest';
import { describe, expect, it, jest } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de usuarios', async () => {
    const resposta = await request(app)
      .get('/usuarios')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].email).toEqual('e@e.com');
  });
});

let idResposta;
describe('POST em /usuarios', () => {
  it('Deve adicionar um novo usuário', async () => {
    const resposta = await request(app)
      .post('/usuarios')
      .send({
        nome: 'Marcio Silva',
        email: 'msilva@teste.com',
        senha: 'abc0123',
        cpf: '00056733355',
        telefone: '21999438524',
        estado: 'RJ',
        cidade: 'Rio de Janeiro',
        bairro: 'Campo Grande',
        rua: 'Estrada do Campinho',
        numero: '234',
        complemento: 'Perto do Clube',
      })
      .expect(201);

    idResposta = resposta.body.content.id;
  });
  it('Deve nao adicionar nada ao passar o body vazio', async () => {
    await request(app).post('/usuarios').send({}).expect(400);
  });
});

describe('GET em /usuarios/id', () => {
  it('Deve retornar recurso selecionado', async () => {
    await request(app).get(`/usuarios/${idResposta}`).expect(200);
  });
});

describe('PUT em /usuarios/id', () => {
  test.each([
    ['nome', { nome: 'Marcio R da Silva' }],
    ['cidade', { cidade: 'SP' }],
    ['email', { email: 'mrsilva@teste.com' }],
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao
      .request(app)
      .put(`/usuarios/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE em /usuarios/id', () => {
  it('Deletar o recurso adcionado', async () => {
    await request(app).delete(`/usuarios/${idResposta}`).expect(200);
  });
});
