<template>
	<view class="title">
		{{title}}
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.title {
	color: #A58351;
	font-size: 32upx;
	margin-bottom: 30upx;
}
</style>
