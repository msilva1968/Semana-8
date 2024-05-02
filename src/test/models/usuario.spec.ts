import { describe, expect, it, jest } from '@jest/globals';
import { UsuarioService } from '../../modulos/usuario/usuario.service';

describe('Testando o modelo Usuario', () => {
  const objetoUsuario = {
    id: '',
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
  };

  it('Deve instanciar um novo usuário', () => {
    const usuario = new UsuarioService(objetoUsuario);

    expect(usuario).toEqual(expect.objectContaining(objetoUsuario));
  });

  it.skip('Deve salvar usuário no BD', () => {
    const usuario = new UsuarioService(objetoUsuario);

    usuario.criaUsuario().then((dados) => {
      expect(dados.nome).toBe('Marcio Silva');
    });
  });

  it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
    const usuario = new UsuarioService(objetoUsuario);

    const dados = await usuario.criaUsuario();

    const retornado = await UsuarioService.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoUsuario,
      }),
    );
  });

  it('Deve fazer uma chamada simulada ao BD', () => {
    const usuario = new UsuarioService(objetoUsuario);

    usuario.criaUsuario = jest.fn().mockReturnValue({
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
    });

    const retorno = usuario.criaUsuario();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoUsuario,
      }),
    );
  });
});
