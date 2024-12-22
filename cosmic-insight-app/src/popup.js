// src/popup.js
// NASA APOD API 호출 예시

document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('image-container');
  const reloadBtn = document.getElementById('reload-btn');
  const url = "http://localhost:4333/api"

  async function fetchAPOD() {
    try {
      const response = await fetch(`${url}/insight/apod`);
      if (!response.ok) throw new Error('API 응답 실패');
      const data = await response.json();
      displayImage(data);
    } catch (error) {
      imageContainer.innerHTML = `<p style="color:red;">이미지를 가져오는 데 실패했습니다: ${error.message}</p>`;
    }
  }

  function displayImage(apodData) {
    imageContainer.innerHTML = `
      <img src="${apodData.url}" alt="NASA APOD"/>
      <p>${apodData.title}</p>
    `;
  }

  reloadBtn.addEventListener('click', () => {
    fetchAPOD();
  });

  // 최초 로딩 시 이미지 불러오기
  fetchAPOD();
});