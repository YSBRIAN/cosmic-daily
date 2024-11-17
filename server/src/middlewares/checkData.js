import axios from 'axios';
import 'dotenv/config';
import APOD from '../models/nasaModel.js';

const NASA_BASE_URL = 'https://api.nasa.gov';
const NASA_API_KEY =  process.env.NASA_API_KEY;


export const checkAPODData = async (req, res, next) => { // 데이터가 없으면 데이터를 저장 있으면 그냥 넘겨
    try {
          // 오늘 데이터가 있는 지 확인
        const today = new Date();
        const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // 오늘 00:00:00
        const endOfToday = new Date(today.setHours(23, 59, 59, 999)); // 오늘 23:59:59
        // 1. 몽고디비에 오늘 만든 이미지 데이터가 있는 지 검색
        const data = await APOD.findOne({
            created_at: { $gte: startOfToday, $lte: endOfToday }, // 오늘 데이터 검색         
        });
      if (data) {
        return next();
      }

      try {
        // APOD API 데이터를 가지고온다
        const data = await getAstronomyPictureOfTheDay();
        await saveApods(data);
        next();
      } catch (error) {
        console.error(error)
        // console.log();
      }
    
        
    } catch (error) {
        console.error(error);
    }
};

// NASA API 예시 함수: Astronomy Picture of the Day (APOD)
const getAstronomyPictureOfTheDay = async () => {
    console.log(NASA_API_KEY);
  try {
    const response = await axios.get(`${NASA_BASE_URL}/planetary/apod`, {
      params: {
        api_key: NASA_API_KEY,
        count:50
      }
    });
    return response.data; // 데이터를 반환 -> [{test: dddd}, {test: yyyy}]
  } catch (error) {
    console.error('NASA API 호출 에러:', error.message);
    throw error;
  }
};

const saveApods = async (data) => { //  saveApod-> 몽고디비
  try {
    const result = APOD.insertMany(data);
    console.log('데이터가 저장 되었습니다. ', result);
  } catch (error) {
    console.error('에러가 발생했습니다: ', error);
  }
};