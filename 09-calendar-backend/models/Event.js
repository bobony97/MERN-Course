const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    /*
        Esta configuración se utiliza para establecer una relación entre dos colecciones (o modelos) en la base de datos MongoDB.
    */
    user: { //Este es un campo en el esquema que representa la relación con otra colección
        /*
            type: Schema.Types.ObjectId: Indica que el campo user será de tipo ObjectId, que es el tipo de datos utilizado por MongoDB para almacenar IDs únicos de documentos en una colección. 
            Cada documento en MongoDB tiene un _id que es un ObjectId.
        */
        type: Schema.Types.ObjectId,
        /*
            ref: 'User': Esta parte establece la referencia a la colección de usuarios ('User'). Indica que el campo user en el esquema de publicaciones se refiere a documentos en la colección de usuarios
        */
        ref: 'User',
        required: true
    }
})

//Esto permite cambiar el nombre a las propiedades que se almacenan en la DB, de _id a id
EventSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
})

module.exports = model('Evento', EventSchema);