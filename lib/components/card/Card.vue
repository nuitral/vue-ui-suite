<script lang="ts" setup></script>
<template>
	<div class="nuitral-card">
		<div class="nuitral-card-header">
			<slot name="header"></slot>
		</div>
		<div class="nuitral-card-body">
			<slot></slot>
		</div>
		<div class="nuitral-card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<style lang="scss">
.nuitral-card {
	padding: 8px 16px;
	box-sizing: border-box;
	background: white;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	color: black;
}
</style>
