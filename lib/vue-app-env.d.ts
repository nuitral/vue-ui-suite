/// <reference types="vite/client" />

import type { NuitralClass, NuitralInputType } from '@nuitral/types'
import type { NuitralIconsId } from '@nuitral/icons'

declare module 'vue' {
	interface GlobalComponents {
		'nuitral-core-input': any
		'nuitral-core-icon': any
	}
}

declare module '@vue/runtime-dom' {
	interface CustomElementAttributes {
		'nuitral-core-input': {
			value?: string | number
			type?: NuitralInputType
			icon?: NuitralIconsId | null
			iconPosition?: 'left' | 'right'
			placeholder?: string
			disabled?: boolean
			classes?: NuitralClass
			onValueChange?: (event: CustomEvent<{ value: string }>) => void
		}
		'nuitral-core-icon': {
			icon?: NuitralIconsId | null
		}
	}
}

export {}
