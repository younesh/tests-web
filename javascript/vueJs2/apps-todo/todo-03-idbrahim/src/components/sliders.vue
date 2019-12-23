<template>
 <div class="slider">

      <sliderItem> 
        <img src="../assets/img/fruit/pomme.jpg">
        <div class="slider__content">
            <h2> titre du slider 1 ( la pomme ) </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis omnis dolores natus recusandae eaque quisquam iusto deserunt! Obcaecati, tempora nulla dignissimos natus quae recusandae doloremque ducimus maiores. Similique, debitis?</p>
        </div>
       </sliderItem>
      <sliderItem>
          <img src="../assets/img/fruit/avocat.jpg">
            <div class="slider__content">
                <h2> titre du slider 2 ( l'avocat ) </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis omnis dolores natus recusandae eaque quisquam iusto deserunt! Obcaecati, tempora nulla dignissimos natus quae recusandae doloremque ducimus maiores. Similique, debitis?</p>
            </div>
        </sliderItem>
      <sliderItem>
           <img src="../assets/img/fruit/tomate.jpg">
             <div class="slider__content">
                <h2> titre du slider 2 ( l'avocat ) </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis omnis dolores natus recusandae eaque quisquam iusto deserunt! Obcaecati, tempora nulla dignissimos natus quae recusandae doloremque ducimus maiores. Similique, debitis?</p>
            </div>
        </sliderItem>
      <sliderItem>
          <img src="../assets/img/legume/pdt.jpg">
            <div class="slider__content">
                <h2> titre du slider 2 ( l'avocat ) </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis omnis dolores natus recusandae eaque quisquam iusto deserunt! Obcaecati, tempora nulla dignissimos natus quae recusandae doloremque ducimus maiores. Similique, debitis?</p>
            </div>
      </sliderItem>
        <div class="slider__nav">
            <button class="btn btn-primary mr-2" @click.prevent="next"> suivant </button> 
            <button class="btn btn-primary"  @click.prevent="prev"> precedent  </button> 
        </div>
        <div class="slider__pagination">
            <a v-for=" btnPage in slides" :key="btnPage.index" @click="goto(btnPage.index)">
             {{ btnPage.index }} 
            </a>
        </div>
   nbr de slides :  {{ slides.length }}
 </div>
</template>
<script>
    import sliderItem from "./sliderItem"
    export default {
        components: {
            sliderItem
        },
        data() {
            return {
                index: 2,
                slides: [],
                direction: null
            }
        },
        mounted() {
            this.slides = this.$children;
            this.slides.forEach((slide, i) => {
                slide.index = i
            })
        },
        computed: {
            slidesCount() {
                return this.slides.length
            }
        },
        methods: {
            next() {
                this.index++;
                this.direction = "left";
                // slidesCount
                if (this.index >= this.slidesCount) {
                    this.index = 0;
                }
            },
            prev() {
                this.index--;
                this.direction = "right";
                if (this.index < 0) {
                    this.index = this.slidesCount - 1;
                }
            }, 
            goto(i) {
                //alert (" index cliqué ! " + i);
                if ( this.index > i ) 
                {  this.direction = "left"; }
                else {
                     this.direction = "right";
                }
                this.index = i;
            }
        }

    }
</script>

<style lang="scss">
    .slider {
        position: relative;
        width: 100%;
        overflow: hidden;
        &__content {
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            left: 0;
            z-index: 2;
            color: white;
            top: 50%;
            /* poussé de la moitié de hauteur du référent */
            transform: translateY(-50%);
            /* tiré de la moitié de sa propre hauteur */
            padding: $gutter-half;
            margin: auto $gutter-half;
        }
        &__pagination {
            $btnPageDiametre : 25px; 
            a {
             display: inline-block;
             margin: $gutter-half;
             cursor: pointer;
            border-radius: 50%;
            width:  $btnPageDiametre; width:  $btnPageDiametre; line-height:  $btnPageDiametre; text-align: center;
            background-color: $color-brand-secondary;
            }

        }
    }
    
    //-----  MEDIA QUERY / RESPONSIVE ----
    @media #{$bp-min-md} {
        .slider {
            &__content {
                width: 66%;
            }
        }
    }
</style>