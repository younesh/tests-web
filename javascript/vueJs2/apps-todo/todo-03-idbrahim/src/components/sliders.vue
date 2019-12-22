<template>
 <div class="slider">

    <sliderItem> <img src="../assets/img/fruit/pomme.jpg"> </sliderItem>
      <sliderItem> <img src="../assets/img/fruit/avocat.jpg"> </sliderItem>
      <sliderItem> <img src="../assets/img/fruit/tomate.jpg"> </sliderItem>
      <sliderItem> <img src="../assets/img/legume/pdt.jpg"> </sliderItem>

      <button class="btn btn-primary mr-2" @click.prevent="next"> suivant </button> 
      <button class="btn btn-primary"  @click.prevent="prev"> precedent  </button> 
   nbr de slides :  {{ slides.length }}
 </div>
</template>
<script>
import sliderItem from "./sliderItem"
export default {
    components : {
        sliderItem
    },
    data () {
        return {
            index : 2,
            slides : [],
            direction : "right"
        }
    },
    mounted() {
        this.slides = this.$children;
        this.slides.forEach((slide, i )=>{
            slide.index = i 
        })
    },
    computed : {
        slidesCount () {  return this.slides.length }
    },
    methods : {
        next () {
            this.index++;
            this.direction = "left";
            // slidesCount
            if (this.index >=  this.slidesCount ) {
                this.index = 0; 
            }
        },
         prev () {
            this.index--;
            this.direction = "right";
            if (this.index < 0 ) {
                this.index =  this.slidesCount - 1 ; 
            }
        }
    }

}
</script>

<style lang="scss">
 .slider {
     position: relative;
     width: 100%;
     overflow: hidden;
 }
</style>