import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales,
        paginaDetalleViaje} from '../Controllers/paginasController.js';
import { guardarTestimonial } from '../Controllers/TestimonialController.js'

 
const router = express.Router();

router.get('/', paginaInicio);

router.get('/Nosotros', paginaNosotros)

router.get('/Viajes', paginaViajes)
router.get('/Viajes/:slug', paginaDetalleViaje)

router.get('/Testimoniales', paginaTestimoniales)
router.post('/Testimoniales', guardarTestimonial)

export default router;