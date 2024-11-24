import APOD from '../models/nasaModel.js';

export const getAPODData = async () => { // mongodb에서 APOD 데이터를 불러온다.
  try {
    const randomImage = await APOD.aggregate([
      { $sample: { size: 1 } } // 컬렉션에서 무작위로 하나의 문서 선택
    ]);
    const highImage = await getRandomHighResolutionImage();

    if (highImage) {
      console.log('High resolution images:  ' + highImage);
      return highImage
    }
    else if (randomImage.length > 0) {
      return randomImage[0]; // 무작위로 선택된 이미지 데이터 반환
    } else {
      throw new Error('데이터베이스에 저장된 이미지가 없습니다.');
    }
  } catch (error) {
    console.error('랜덤 이미지 가져오기 실패:', error);
    throw error;
  }
};

// 데이터 필터링 함수
async function getRandomHighResolutionImage() {
  try {
    const randomImage = await APOD.aggregate([
      {
        $project: {
          hdurl: 1,
          resolution: {
            $convert: {
              input: {
                $arrayElemAt: [
                  { $regexFind: { input: "$url", regex: /(\d+)(?=\.\w{3,4}$)/ } },
                  0,
                ],
              },
              to: "int",
              onError: null,
              onNull: null,
            },
          },
        },
      },
      {
        $match: {
          resolution: { $gte: 1200 },
        },
      },
      { $sample: { size: 1 } }, // 무작위로 하나 선택
    ]);

    console.log('Random High Resolution Image:', randomImage[0]);
    return randomImage[0];
  } catch (error) {
    console.error('Error fetching random high resolution image:', error);
  }
}