/// <reference types="vite/client" />

import type { DefineComponent } from 'vue'
import type {
    NuitralClass,
    NuitralContentJustify,
    NuitralIconPosition,
    NuitralInputType,
    NuitralListDirection,
} from '@nuitral/types'
import type { NuitralIconsId } from '@nuitral/icons'

declare module 'vue' {
    interface GlobalComponents {
        'nuitral-core-input': any
        'nuitral-core-icon': any
        'nuitral-core-chip': any
        'nuitral-core-list': any
    }

    const component: DefineComponent<unknown, object, any>
    export default component
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
        'nuitral-core-list': {
            classes?: NuitralClass
            justify: NuitralContentJustify
            direction?: NuitralListDirection
        }
    }
}

export {}