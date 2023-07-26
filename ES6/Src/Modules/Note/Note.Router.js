import { Router } from 'express';
import * as noteLogic from './Controller/Note.js';

export const noteRouter = Router()

noteRouter.post('/add', noteLogic.addnote)
noteRouter.delete('/delete/:id', noteLogic.deletenote)
noteRouter.put('/update/:id', noteLogic.updatenote)
noteRouter.get('/get', noteLogic.getnote)
noteRouter.get('/note&user', noteLogic.getBoth)
