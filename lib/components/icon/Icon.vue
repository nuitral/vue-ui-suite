<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { NuitralIconsId } from '@nuitral/icons'

const props = defineProps({
	icon: {
		type: String as PropType<NuitralIconsId>,
		default: '',
	},
})

const iconClass = computed(() => 'nuitral-icon-' + props.icon)
</script>
<template>
	<div class="nuitral-icon" :class="iconClass"></div>
</template>
