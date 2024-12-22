import { getRandomImage, getMarsData2Mongo, getMarsEarthWeatherData } from '../services/insightService.js';
import { getLocationWeatherData } from '../services/openAPIService.js';

export const getApodImage = async (req, res) => {
  try {
    const data = await getRandomImage();
    res.json(data);
  } catch (error) {
    res.status(500).send('데이터를 가져오는 중 문제가 발생했습니다.');
  }
};

// Mars Weather를 몽고디비에 저장
export const loadMarsWeather2DB = async (req, res) => {
  try {
    console.log('Loading');
    await getMarsData2Mongo();
    // console.log("data: ", data);
  } catch (error) {
    res.status(500).send('데이터를 가져오는 중 문제가 발생했습니다.');
  }
};

// 날씨를 가져온다
export const getWeather = async (req, res) => {
  try {
    console.log(req.body);
    const { latitude, longitude } = req.body;
    // 몽고디비에서 Mars 날씨 데이터를 가져온다
    const marsWeatherData = await getMarsEarthWeatherData(latitude, longitude);
    // 현재 위치 날씨 가져오기
    const earthWeatherData = await getLocationWeatherData(latitude, longitude);
    res.json({
      "earth": earthWeatherData,
      "mars": marsWeatherData
    });
  } catch (err) {
    console.error(err);
  }
};

