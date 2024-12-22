import express from 'express';
import insightRoutes from './routes/insightRoutes.js';
import openAPIRoutes from './routes/openAPIRoutes.js';

import cors from 'cors';
import { connectDB } from './config/db.js';
// 환경변수 로드
import 'dotenv/config'

connectDB().catch(console.dir);

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/api/insight', insightRoutes);
app.use('/api/openapi', openAPIRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));