import { NuitralInputProps as InputProps } from '@nuitral/types'
/**
 * Imports the `NuitralButtonProps` interface from the '@nuitral/types' library
 * and renames it locally as `ButtonProps`.
 * This allows the local interface to extend the properties defined
 * in the base `NuitralButtonProps` without causing conflicts.
 */
import { NuitralIconsId } from '@nuitral/icons'
/**
 * Imports the type definition for `NuitralIconsId` from the '@nuitral/icons' library.
 * This type is used to specify the icon identifier from the nuitral icon set.
 */

/**
 * Extends the standard `NuitralInputProps` with additional properties specific to the nuitral library vue-ui-suite.
 *
 * Properties:
 * * - `modelValue` (optional): Represents the bound value of the input component when using Vue's `v-model`. It can be a string or number, depending on the input type.
 * * - `icon` (optional): Represents the identifier for an icon from the nuitral icon set.
 *   Can be a valid `NuitralIconsId` or `null`.
 */
export interface NuitralInputProps extends InputProps {
    modelValue?: string | number
    icon?: NuitralIconsId | null
}
