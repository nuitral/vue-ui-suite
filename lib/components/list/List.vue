<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { NuitralListProps } from '@nuitral/types'

const props = withDefaults(defineProps<NuitralListProps>(), {
    direction: 'horizontal',
    classes: '',
})

const computedClasses = computed(() => `${props.classes} ${props.direction}`)

const slots = useSlots()
</script>
<template>

    <div class="nuitral-list" :class="[computedClasses]">
        <div class="start">
            <slot name="start" v-if="slots.start" />
        </div>
        <div class="default">
            <slot />
        </div>
        <div class="end">
            <slot name="end" v-if="slots.end" />
        </div>
    </div>
</template>


