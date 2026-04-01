/// <reference types="vite/client" />

import type {
    NuitralClass,
    NuitralIconPosition,
    NuitralInputType,
} from '@nuitral/types'
import type { NuitralIconsId } from '@nuitral/icons'

declare module 'vue' {
    import type { DefineComponent } from 'vue'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface GlobalComponents {
        'nuitral-core-input': any
        'nuitral-core-icon': any
        'nuitral-core-chip': any
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
    }
}

export {}