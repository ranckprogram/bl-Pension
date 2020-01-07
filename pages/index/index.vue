<template>
	<view class="content">
		<view class="bg"></view>
		<view class="card">
			<image class="avatar" src="../../static/avatar.jpg" mode="scaleToFill center"></image>
			<text class="username">{{username}}</text>
			<view class="uni-flex uni-row advisor">
				<view class="flex-item advisor-left">
					<image class="advisor-avatar" src="../../static/avatar.jpg" mode="scaleToFill center"></image>
					<view class="flex-item advisor-info ">
						<view class="">
							<text class="username">宋艳</text>
						</view>
						<text class="jobname">养老顾问</text>
					</view>
				</view>
				
			    <view class="flex-item">
					<time class="time">12-20 10:30</time>
				</view>
			</view>
		</view>
		<view class="demand">
			<panel>
				<title title="养老需求"/>
				<view class="list">
					<view class="list-item">
						<text class="label" space="emsp">地  址</text>
						<text class="value">北京</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp" >年  龄</text>
						<text class="value">69岁</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp"> 入住时间</text>
						<text class="value">3个月内</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp" >联系电话</text>
						<text class="value">18648398769</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp" >机构类型</text>
						<text class="value">自理 介护 居家</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp" >价格区间</text>
						<text class="value">5000元以下 5000-8000</text>
					</view>
					<view class="list-item">
						<text class="label" space="emsp" >特色需求</text>
						<text class="value">交通便利 自然环境 位于城区 新建项目 连锁机构</text>
					</view>
				</view>
			</panel>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'郭娟',
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.content {
}

.bg {
	background-color: #B1863A;
	height: 140upx;
}

.card {
	position: relative;
	text-align: center;
	background-color: #fff;
	padding-top: 70upx;
	margin: -70upx 30upx 30upx;
	border-radius: 10upx;
	box-shadow:0px 2px 22px 0px rgba(157,157,157,0.28);
}

.avatar {
	position: absolute;
	top: -50upx;
	left: 50%;
	margin-left: -50upx;
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
}

.username {
	font-size: 32upx;
}

.uni-flex {
	display: flex;
}

.flex-item {
	flex: 1;
}

.advisor {
	border-top: 1px solid #E5E5E5;
	margin:  30upx;
	border-radius: 10upx;
	margin-bottom: 30upx;
}

.advisor-left {
	width: 68upx;
	text-align: left;
	padding: 30upx 0;
	font-size: 0;
}

.advisor-avatar {
	display: inline-block;
	width: 68upx;
	height: 68upx;
	vertical-align: middle;
	margin-right: 12upx;
}

.advisor-info {
	display: inline-block;
	text-align: left;
	vertical-align: middle;
}

.time {
	font-size: 24upx;
	color: #999;
	float: right;
	margin-top: 50upx;
}

.jobname {
	font-size: 22upx;
	color: #C7C7C7;
}

.demand {
	height: 500upx;
	margin: 0 30upx;
	background-color: #fff;
}

.list-item {
	margin-bottom: 30upx;
}

.list-item .label {
	float: left;
	width: 128upx;
	color: #C7C7C7;
	font-size: 32upx;
}

.list-item .value {
	display: block;
	color: #333333;
	font-size: 32upx;
	margin-left: 148upx;;
}
</style>
