<template>
	<div class="hello">{{hello}}</div>
</template>
<script>
	export default {
		data(){
			return {
				hello:'hello'
			}
		},
		mounted(){
			console.log('mfjids')
		}
	}
</script>
<style lang="stylus" scoped>
	.hello{
		color red
	}
</style>