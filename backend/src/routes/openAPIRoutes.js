import express from 'express';
import { loadMarsWeather2DB } from '../controllers/insightController.js';

const router = express.Router();
// 화성 날씨 몽고디비에 적재
router.get('/load/mars-weather', loadMarsWeather2DB);

export default router;
