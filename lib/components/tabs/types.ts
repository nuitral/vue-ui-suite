import { NuitralTabProps } from '../tab/types'
import { NuitralTabsProps as TabsProps } from '@nuitral/types'

/**
 * Extends the base `NuitralTabsProps` with additional properties specific to the nuitral Tabs component.
 *
 * Properties:
 * - `items`: An array of tab items. Each item is a partial of `NuitralTabProps`, allowing for optional properties within each tab.
 */
export interface NuitralTabsProps extends TabsProps {
	items: Partial<NuitralTabProps>[]
}
