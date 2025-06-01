<script lang="ts" setup></script>
<template>
	<div class="nuitral-card nuitral-card-background-background nuitral-card-border-primary-100">
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
