import express from 'express';
import { getApodImage, loadMarsWeather2DB, getWeather } from '../controllers/insightController.js';
import { checkImageMiddleware } from '../middleware/checkImage.js';

const router = express.Router();

// insight weather 가져오기
router.post('/weather', getWeather);
// insight apod 가져오기
router.get('/apod', checkImageMiddleware, getApodImage);

export default router;