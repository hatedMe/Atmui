

<template>
    <Silder>
        <SilderItem v-for="(item,index) in list" :key="index">
            <img class="slide-banner" :src="item" alt="">
        </SilderItem>
    </Silder>
</template>




<script>
export default {
  //name:'Silder'
  data () {
      return {
          list:[
              './assets/img/1.jpg',
              './assets/img/2.jpg',
              './assets/img/3.jpg'
          ]
      }
  }
}
</script>



