import { viaje } from "../Models/ViajeModel.js";
import TestimonialModel from '../Models/TestimonialModel.js';
const paginaInicio =  async (req, res) => { //requ: Lo que enviamos, res: lo que express nos responde

    const promiseDB = [];
    promiseDB.push( viaje.findAll({limit: 3}) );
    promiseDB.push( TestimonialModel.findAll({limit: 3}) )

    try {
        const resultado = await Promise.all( promiseDB );
        res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            todosTestimoniales: resultado [1]
        });
    } catch (error) {
        console.log(error);
    }

    
};

const paginaNosotros =  (req, res) => { //requ: Lo que enviamos, res: lo que express nos responde
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => { //requ: Lo que enviamos, res: lo que express nos responde

    //Obtener todos los viajes de la BD
    const viajes = await viaje.findAll();

    res.render("viajes", {
        pagina: 'Viajes',
        viajes
    });
};

export const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viajeDetalle = await viaje.findOne({ where: { slug } })
        res.render('DetalleViaje', {
            pagina: 'Información de Viaje',
            viajeDetalle
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, res) => { //requ: Lo que enviamos, res: lo que express nos responde
    try {
        const todosTestimoniales = await TestimonialModel.findAll();
        res.render("testimoniales", {
            pagina: 'Testimoniales',
            todosTestimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}