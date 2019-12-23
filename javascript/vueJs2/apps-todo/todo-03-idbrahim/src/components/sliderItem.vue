<template>
  <transition :name="transition">
    <div class="slider__item" v-show="visible"> <!--  v-show="visible" -->
        index : {{ index }}
        visible ?  {{ visible }}
        <slot></slot>
    </div>
  </transition>

</template>

<script>
export default {
  data() {
      return {
          index : 0 
      }
  },
  computed : {
      visible () {
         return  this.index === this.$parent.index; 
      },
      transition () {
          if (this.$parent.direction) 
           {
               return "slide-" + this.$parent.direction
           }
           else {
               return null;
           }
      }      
  }
}
</script>

<style lang="scss">
.slider__item {
    background: yellow;
    height: 300px;
    position: relative;
    width: 100%;
    overflow: hidden;
    > img {
        object-fit: cover;
        max-width: 100%;
        width: 100%;
    }
}

// silde right 
.slide-right-enter-active {
    animation: slideRightIn 0.5s;
}

.slide-right-leave-active {
      animation: slideRightOut 0.5s;
      position: absolute;
      top: 0;
      left: 0;
}

@keyframes slideRightIn {
    from {
        transform: translateX(100%)
    }
    to {
           transform: translateX(0)
    }
}


@keyframes slideRightOut {
    from {
        transform: translateX(0)
    }
    to {
           transform: translateX(-100%)
    }
}

// slide left 

 
.slide-left-enter-active {
    animation: slideLeftIn 0.5s;
}

.slide-left-leave-active {
      animation: slideLeftOut 0.5s;
      position: absolute;
      top: 0;
      left: 0;
}

@keyframes slideLeftIn {
    from {
        transform: translateX(-100%)
    }
    to {
           transform: translateX(0)
    }
}


@keyframes slideLeftOut {
    from {
        transform: translateX(0)
    }
    to {
           transform: translateX(100%)
    }
}
</style>