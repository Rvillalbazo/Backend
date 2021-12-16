import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add',auth.verifyAlmacen,categoriaController.add);
router.get('/query',auth.verifyCliente,categoriaController.query);
router.get('/list',auth.verifyCliente,categoriaController.list);
router.put('/update',auth.verifyAlmacen,categoriaController.update);
router.delete('/remove',auth.verifyAlmacen,categoriaController.remove);
router.put('/activate',auth.verifyAlmacen,categoriaController.activate);
router.put('/deactivate',auth.verifyAlmacen,categoriaController.deactivate);

export default router;