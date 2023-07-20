import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createCourse, deleteCourse, getCourse, getCourseByCat, getSingleCourse, updateCourse } from '../controller/course.controller.js';

export const courseRoute = express.Router();

courseRoute.post('/', verifyToken, createCourse);

courseRoute.get('/', getCourse);

courseRoute.get('/category/:cat', getCourseByCat);

courseRoute.put('/:id',verifyToken, updateCourse);

courseRoute.get('/:id', getSingleCourse);

courseRoute.delete('/:id',verifyToken, deleteCourse);