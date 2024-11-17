<template>
  <div id="app">
    <HomeViewer />
  </div>
</template>

<script>
// import NasaData from './components/NasaData.vue';
import HomeViewer from './components/Home.vue';

export default {
  name: 'App',
  components: {
    HomeViewer,
  },
};
</script>