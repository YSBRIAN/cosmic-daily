<template>
    <div class="container">
        <div class="top-left">
            <p class="title">{{ apodData.title }}</p>
            <button class="change-bg-button"  @click="fetchImage">이미지 변경</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'HomeViewer',
        data() {
            return {
                imageUrl: '',
                apodData: {},
        };
    },
    async mounted() {
        await this.loadData();
    },
    methods: {
        async loadData() {
            const cachedData = localStorage.getItem('apodData');

            if (cachedData) {
                this.apodData = JSON.parse(cachedData);
                this.imageUrl = this.apodData.url;
                this.updateBackground();
            } else {
                await this.fetchImage();
            }
        },
        async fetchImage() {
            try {
                // 이미지 가져오기
                const host = 'http://localhost:3005';
                const path = '/api/nasa/apod'
                const response = await axios.get(host + path); // Node.js 서버에서 데이터 요청
                this.apodData = response.data;
                this.imageUrl = response.data.url; // NASA API에서 가져온 이미지 URL을 저장
                console.log(this.apodData);
                // API 데이터 로컬 스토리지에 저장
                localStorage.setItem('apodData', JSON.stringify(this.apodData));
                // 배경화면 업데이트
                // this.updateBackground();
            } catch (error) {
                console.error("이미지를 가져오는 중 오류가 발생했습니다:", error);
            }
        },
        updateBackground() {
            document.body.style.backgroundImage = `url(${this.imageUrl})`;
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        }
    },
    watch: {
        imageUrl(newUrl) {
            if (newUrl) {
                this.updateBackground();
                }
            }
        }
    };
</script>

<style>
  /* 전역 스타일 - 텍스트 대비를 높이기 위한 기본 설정 */
body {
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #000000;
}

/* 컨테이너 */
.container {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; /* 왼쪽 상단에 배치 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

/* 타이틀과 버튼 박스 */
.top-left {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6); /* 반투명 배경 */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

/* 타이틀 스타일 */
.title {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* 버튼 스타일 */
.change-bg-button {
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  opacity: 0.8;
}

.change-bg-button:hover {
  background: #2980b9;
}
</style>