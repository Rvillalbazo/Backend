import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add',auth.verifyAlmacen,articuloController.add);
router.get('/query',auth.verifyUsuario,articuloController.query);
router.get('/queryCodigo',auth.verifyUsuario,articuloController.queryCodigo);
router.get('/list',auth.verifyUsuario,articuloController.list);
router.put('/update',auth.verifyAlmacen,articuloController.update);
router.delete('/remove',auth.verifyAlmacen,articuloController.remove);
router.put('/activate',auth.verifyAlmacen,articuloController.activate);
router.put('/deactivate',auth.verifyAlmacen,articuloController.deactivate);

export default router;