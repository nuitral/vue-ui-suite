<script setup lang="ts">
import { useColorsAttributesValidator } from '../../composables'
import { computed, useAttrs } from 'vue'
import { NuitralChipProps } from './types'

const props = withDefaults(defineProps<NuitralChipProps>(), {
    icon: null,
    iconPosition: 'left',
    classes: '',
})
const { isValidAttribute } = useColorsAttributesValidator()

const attrs = useAttrs()

const backgroundColor = computed(() => {
    const filteredAttrs: Record<string, any> = {}
    for (const key in attrs) {
        if (isValidAttribute(key)) {
            filteredAttrs[key] = attrs[key]
        }
    }
    return Object.keys(filteredAttrs).map(key => `nuitral-chip-${key}`)
})

const computedClasses = computed(
    () => `${props.classes} ${backgroundColor.value}`
)
</script>

<template>
    <nuitral-core-chip
        :icon="icon"
        :iconPosition="iconPosition"
        :classes="computedClasses"
    >
        <div slot="default"><slot></slot></div>
    </nuitral-core-chip>
</template>
