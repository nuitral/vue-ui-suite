/// <reference types="vite/client" />

import type {
	NuitralClass,
	NuitralIconPosition,
	NuitralInputType,
} from '@nuitral/types'
import type { NuitralIcons, NuitralIconsId } from '@nuitral/icons'

declare module 'vue' {
	interface GlobalComponents {
		'nuitral-core-input': any
		'nuitral-core-icon': any
		'nuitral-core-chip': any
	}
}

declare module '@vue/runtime-dom' {
	interface CustomElementAttributes {
		'nuitral-core-input': {
			value?: string | number
			type?: NuitralInputType
			icon?: NuitralIconsId | null
			iconPosition?: NuitralIconPosition
			placeholder?: string
			disabled?: boolean
			classes?: NuitralClass
			onValueChange?: (event: CustomEvent<{ value: string }>) => void
		}
		'nuitral-core-icon': {
			icon?: NuitralIconsId | null
		}
		'nuitral-core-chip': {
			icon?: NuitralIconsId | null
			iconPosition?: NuitralIconPosition
			classes?: NuitralClass
		}
	}
}

export {}
