import { Router } from 'express';
import TripController from './controllers/TripController.js';

const router = Router();

router.post('/trips', TripController.create); //create a new trip, will not be used, created for testing purposes
router.get('/trips', TripController.getAll); //get all trips
router.get('/trips/:id', TripController.getOneById); //get trip by unique id generated by db
router.get('/trips/bydeparture/:portFromId', TripController.getByPortFromId); //get trip by port of departure
router.get('/trips/bydestination/:portToId', TripController.getByPortToId); //get trip by port destination
router.put('/trips', TripController.update); //update trip properties, will not be used, created for testing purposes
router.delete('/trips/:id', TripController.delete); //delete trip, will not be used, created for testing purposes

export default router;