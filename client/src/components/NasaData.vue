<template>
    <div :style="{ backgroundImage: 'url(' + apodData.url + ')' }">
      <!-- <h1>Astronomy Picture of the Day</h1> -->
      <!-- <p>{{ apodData.title }}</p> -->
      <!-- <p>{{ apodData.explanation }}</p> -->
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    name: 'NasaData',
    data() {
      return {
        apodData: {},
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3005/api/nasa/apod'); // Node.js 서버에서 데이터 요청
        this.apodData = response.data;
        console.log(this.apodData);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    },
  };
</script>
  
<style scoped>
  h1 {
    color: #42b983;
  }
</style>