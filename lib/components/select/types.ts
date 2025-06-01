import { NuitralIconsId } from '@nuitral/icons'
import { NuitralIconPosition } from '@nuitral/types'
import { NuitralOptionProps } from '../option/types'

export interface NuitralSelectProps {
	items: Partial<NuitralOptionProps>[]
	modelValue: any
	icon: NuitralIconsId | null
	iconPosition: NuitralIconPosition
}
