import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createNotice, deleteNotice, getNotice, getSingleNotice, updateNotice } from '../controller/notice.controller.js';

export const noticeRoute = express.Router();

noticeRoute.post('/', verifyToken, createNotice);

noticeRoute.get('/', getNotice);

noticeRoute.put('/:id',verifyToken, updateNotice);

noticeRoute.get('/:id', getSingleNotice);

noticeRoute.delete('/:id',verifyToken, deleteNotice);