import express from 'express';
import path from 'path';

import obtenerUsuarioPorId from './fakeDatabase/obtenerUsuarioPorId/index';
import datosDeComercio from './fakeDatabase/datosDeComercio/index';
import listadoDeTodosLosComercios from './fakeDatabase/listadoDeTodosLosComercios/index';
import obtenerInvitacionesDeUsuario from './fakeDatabase/obtenerInvitacionesDeUsuario/index';
import obtenerTransaccionesPendientesDeUnComercio from './fakeDatabase/obtenerTransaccionesPendientesDeUnComercio/index';
import obtenerMonederoDeUsuario from './fakeDatabase/obtenerMonederoDeUsuario/index';
import listadoFiltradoDeComercios from './fakeDatabase/listadoFiltradoDeComercios/index';
import promocionesComercio from './fakeDatabase/promocionesComercio/index';
import puntosMonederoUsuario from './fakeDatabase/puntosMonederoUsuario/index';
import obtenerPromocionesDisponiblesParaUnUsuario from './fakeDatabase/obtenerPromocionesDisponiblesParaUsuario/index';
import obtenerPromocionesDisponiblesParaUsuarioSegunSuUbicacion from './fakeDatabase/obtenerPromocionesDisponiblesParaUsuarioSegunSuUbicacion/index';
import monederosDeUsuario from './fakeDatabase/monederosDeUsuarios/index';

express()
  .use('/public', express.static(path.resolve('public')))
  .set('json spaces', 2)
  .get('/', (req, res) => {
    res.status(200).send('Hola!')
  })
  .use(obtenerUsuarioPorId)
  .use(datosDeComercio)
  .use(listadoDeTodosLosComercios)
  .use(obtenerInvitacionesDeUsuario)
  .use(obtenerTransaccionesPendientesDeUnComercio)
  .use(obtenerMonederoDeUsuario)
  .use(listadoFiltradoDeComercios)
  .use(promocionesComercio)
  .use(puntosMonederoUsuario)
  .use(obtenerPromocionesDisponiblesParaUnUsuario)
  .use(obtenerPromocionesDisponiblesParaUsuarioSegunSuUbicacion)
  .use(monederosDeUsuario)
  .listen(process.env.PORT || 3000, (err) => {
    console.log(`Escuchando en el puerto ${process.env.PORT || 3000} :)`)
  });
