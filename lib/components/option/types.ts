import { NuitralClass } from '@nuitral/types'
import { VNode } from 'vue'

export interface NuitralOptionProps {
	option: string
	classes: NuitralClass
	disabled: boolean
	component: any
	leftSide: VNode | null
	rightSide: VNode | null
}
