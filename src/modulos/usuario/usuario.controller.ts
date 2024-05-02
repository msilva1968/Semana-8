import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CryptSenhaPipe } from '../../recursos/pipes/crypt-senha.pipe';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(
    @Body() { senha, ...dadosDoUsuario }: CriaUsuarioDTO,
    @Body('senha', CryptSenhaPipe) senhaCrypt: string,
  ) {
    const usuarioCriado = await this.usuarioService.criaUsuario({
      ...dadosDoUsuario,
      senha: senhaCrypt,
    });

    return {
      messagem: 'Usuário criado com sucesso',
      usuario: new ListaUsuarioDTO(usuarioCriado.id, usuarioCriado.nome),
    };
  }

  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.usuarioService.listUsuarios();

    return {
      mensagem: 'Lista de usuários.',
      usuarios: usuariosSalvos,
    };
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(
      id,
      novosDados,
    );

    return {
      messagem: 'Usuário atualizado com sucesso',
      usuario: usuarioAtualizado,
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.deletaUsuario(id);

    return {
      messagem: 'Usuário excluído com sucesso',
      usuario: usuarioRemovido,
    };
  }
}
