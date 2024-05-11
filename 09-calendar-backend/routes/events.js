const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { check } = require('express-validator');
const { fieldsValidator } = require('../middlewares/fields-validator');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validateJWT); // Esto hace que todas las peticiones que se encuentren debajo van a requerir el token 

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').notEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de finalización es obligatoria').custom(isDate),
        fieldsValidator
    ], 
    createEvent
);

router.get('/', getEvents);

router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').notEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de finalización es obligatoria').custom(isDate),
        fieldsValidator
    ],
    updateEvent
);

router.delete('/:id',  deleteEvent);

module.exports = router;