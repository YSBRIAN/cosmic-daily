import { getAPODData } from '../services/nasaService.js';

// export const saveApod = async (req, res) => {
//   try {
//     const dataList = await getAstronomyPictureOfTheDay();
//     //저장
//     await saveApods(dataList);
    
//   } catch (error) {
//     res.status(500).send('NASA API 데이터를 가져오는 중 문제가 발생했습니다.');
//   }
// };

export const getAPOD = async (req, res) => { // mongodb에서 apod 데이터를 한개 가지고와서 전달
  try {
    // 몽고 디비에서 데이터를 가져오는 service를 불러와서 가지고 온 데이터를 response 객체(res)에 저장해서 넘겨준다.
    const data = await getAPODData();
    console.log(data);
    res.json(data);

  } catch (error) {
    // 에러 발생시 throws 
    res.status(500).send(error);
  }


};