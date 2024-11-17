import mongoose from 'mongoose';

const apodSchema = new mongoose.Schema({
    copyright:String,
    date:String,
    explanation: String,
    hdurl:String,
    media_type:String,
    service_version:String,
    title:String,
    url:String,
    created_at:{ type: Date, default: Date.now },  // 데이터 등록일
})
const APOD = mongoose.model('APOD', apodSchema);
export default APOD;
