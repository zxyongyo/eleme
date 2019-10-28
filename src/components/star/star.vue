<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" 
          :class="c" 
          v-for="(c, index) in starClasses" 
          :key="index"></span>
  </div>  
</template>

<script>
const CLASS_ON = 'on'				//全星
const CLASS_HALF = 'half'		//半星
const CLASS_OFF = 'off'			//空

export default {
	props: {
		score: {
			type: Number,
			default: 3.5
		},
		size: {
			type: Number,
			default: 48
		}
	},
	computed: {
		starClasses (){

			const scs = [];

			var score = this.score;
			var scoreInteger = Math.floor(score);
			//添加全星
			for(let i=0; i<scoreInteger; i++){
				scs.push(CLASS_ON);
			}
			//添加半星
			if(score - scoreInteger >= 0.5){
				scs.push(CLASS_HALF);
			}
			//添加空星
			while(scs.length < 5){
				scs.push(CLASS_OFF);
			}
			return scs;
		}
	}
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .star-24
    .star-item
      display inline-block
      width 10px
      height 10px
      background-repeat no-repeat
      background-size 10px 10px
    .on
      bg-star(star24_on)
    .half
      bg-star(star24_half)
    .off
      bg-star(star24_off)
  .star-36
    .star-item
      display inline-block
      width 15px
      height 15px
      background-repeat no-repeat
      background-size 15px 15px
    .on
      bg-star(star36_on)
    .half
      bg-star(star36_half)
    .off
      bg-star(star36_off)
  .star-48
    .star-item
      display inline-block
      width 20px
      height 20px
      background-repeat no-repeat
      background-size 20px 20px
    .on
      bg-star(star48_on)
    .half
      bg-star(star48_half)
    .off
      bg-star(star48_off)
</style>