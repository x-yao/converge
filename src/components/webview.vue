<template>
	<webview :src="src" :useragent="ua" :id="id" blinkfeatures="Touch"></webview>
</template>

<script>
export default {
  props: ['ua', 'src' ,'id'],
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
