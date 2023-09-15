import  Sequelize from "sequelize";
import db from "../config/db.js";

const TestimonialModel = db.define('testimoniales', {
    nombre : {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

export default TestimonialModel