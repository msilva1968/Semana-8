import express from 'express';
import { UsuarioController } from '../modulos/usuario/usuario.controller';

const router = express.Router();

router
  .get('/usuarios', UsuarioController.listUsuarios)
  .post('/usuarios', UsuarioController.criaUsuario)
  .put('/usuarios/:id', UsuarioController.atualizaUsuario)
  .delete('/usuarios/:id', UsuarioController.removeUsuario);

export default router;
