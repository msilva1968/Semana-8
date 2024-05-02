import express from 'express';
import usuarios from './usuariosRoutes.js';

const routes = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Curso de node Aula 8' });
  });

  app.use(express.json(), usuarios);
};

export default routes;
