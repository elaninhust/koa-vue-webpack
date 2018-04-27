<template>
	<div class="hello">{{hello}}</div>
</template>
<script>
	export default {
		data(){
			return {
				hello:'stock'
			}
		},
		mounted(){
			console.log('mfjids')
		}
	}
</script>
<style lang="stylus" scoped>
	.hello{
		color blue
	}
</style>