/*  
    Un Schema es una descripción de la estructura de los documentos en una colección de MongoDB. Define qué campos tendrá cada documento y qué tipo de datos se esperan para cada campo. 
    También puede incluir opciones de validación, como valores requeridos, únicos, mínimos, máximos, y otras restricciones

    Model es una clase que se crea a partir de un Schema. Representa una colección específica en la base de datos MongoDB y proporciona métodos para realizar operaciones CRUD en esa colección. 
    Un modelo se utiliza para crear, leer, actualizar y eliminar documentos en la colección asociada
*/
const { Schema, model } = require('mongoose');

/*
    Este esquema especifica la estructura de los documentos de la colección de usuarios en la base de datos. 
    En este caso, el esquema tiene tres campos: name, email, y password, cada uno con su tipo de datos y opciones de validación.
*/
const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

/*
    Utiliza la clase model para crear un modelo de datos basado en el esquema UserSchema. model() toma dos parámetros: 
    el nombre del modelo ('User' en este caso) y el esquema (UserSchema). Esto crea un modelo llamado UserModel que se utilizará para realizar operaciones CRUD en la colección de usuarios en la base de datos.
*/
module.exports = model('User', UserSchema );