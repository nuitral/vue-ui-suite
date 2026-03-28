<script lang="ts" setup>
import {  PropType } from 'vue'
import { NuitralIconsId } from '@nuitral/icons'

defineProps({
    icon: {
        type: String as PropType<NuitralIconsId>,
        default: '',
    },
})
</script>
<template>
    <nuitral-core-icon :icon="icon"></nuitral-core-icon>
</template>
