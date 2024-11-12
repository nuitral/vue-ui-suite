import { Component, VNode } from 'vue'
import { NuitralIconsId } from '@nuitral/icons'
import { NuitralTabProps as TabProps } from '@nuitral/types'

/**
 * Extends the base `NuitralTabProps` with additional properties specific to the Vue implementation of the nuitral Tab component.
 *
 * Properties:
 * - `component`: A Vue component to be rendered within the tab. Can be `null` if not provided.
 * - `icon`: An identifier from the nuitral icon set to be displayed on the tab. Can be `null` if no icon is needed.
 * - `leftSide`: A Vue virtual node (`VNode`) to be rendered on the left side of the tab. Can be `null`.
 * - `rightSide`: A Vue virtual node (`VNode`) to be rendered on the right side of the tab. Can be `null`.
 */
export interface NuitralTabProps extends TabProps {
	component: Component | null
	icon: NuitralIconsId | null
	leftSide: VNode | null
	rightSide: VNode | null
}
