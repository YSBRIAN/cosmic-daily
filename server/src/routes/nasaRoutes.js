import express from 'express';
import { getAPOD } from '../controllers/nasaController.js';
import { checkAPODData } from '../middlewares/checkData.js';

const router = express.Router();

router.get('/apod', checkAPODData, getAPOD); // mongodb에서 apod 데이터를 한개 가지고와서 전달
// router.get('/save', saveApod); // mongodb에서 apod 데이터를 한개 가지고와서 전달


export default router;

