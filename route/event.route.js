import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createEvent, deleteEvent, getEvent, getSingleEvent, updateEvent } from '../controller/event.controller.js';

export const eventRoute = express.Router();

eventRoute.post('/', verifyToken, createEvent);

eventRoute.get('/', getEvent);

eventRoute.put('/:id',verifyToken, updateEvent);

eventRoute.get('/:id', getSingleEvent);

eventRoute.delete('/:id',verifyToken, deleteEvent);