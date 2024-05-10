const { Router } = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

router.use(validateJWT); // Esto hace que todas las peticiones que se encuentren debajo van a requerir el token 

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id',  deleteEvent);

module.exports = router;