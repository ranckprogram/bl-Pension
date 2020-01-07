<template>
	<view class="panel">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.panel {
	background-color: #fff;
	box-shadow:0px 2px 22px 0px rgba(230,230,230,0.8);
	padding: 30upx;
	border-radius: 10upx;
}
</style>
