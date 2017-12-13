<template>
	<section class="app-main" style="min-height: 100%">
		<transition name="fade" mode="out-in">
			<router-view :key="key"></router-view>
		</transition>
	</section>
</template>

<style rel="stylesheet/scss" lang="scss">
  *:focus{
    outline: none !important;
  }
  *{
    text-decoration: none;
  }
</style>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
