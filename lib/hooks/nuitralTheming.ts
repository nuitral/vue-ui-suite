import { ref, onMounted } from 'vue'
import { NuitralThemingOptions } from '@nuitral/types'
/**
 * Hook that handles theming and dark mode.
 *
 * It applies the selected theme and mode ( light/dark ) to the root element ( rootId ) of the application.
 * Optionally, it can persist settings to localStorage if the `saveSettings` option is enabled.
 *
 */
const useNuitralTheming = ({
	theme = 'nuitral',
	darkMode = false,
	lightModeName = 'nuitral-light-mode',
	darkModeName = 'nuitral-dark-mode',
	rootId = 'nuitral-app',
	saveSettings = false,
}: NuitralThemingOptions) => {
	const getStoredData = () => {
		if (!saveSettings) return { theme, darkMode }
		const storedData = localStorage.getItem('nuitral')
		return storedData ? JSON.parse(storedData) : { theme, darkMode }
	}

	const saveToStorage = (darkMode: boolean, theme: string) => {
		if (saveSettings) {
			localStorage.setItem('nuitral', JSON.stringify({ darkMode, theme }))
		}
	}

	const { theme: initialTheme, darkMode: initialDarkMode } = getStoredData()

	const isDarkMode = ref<boolean>(initialDarkMode)
	const themeName = ref(initialTheme)
	const appRef = ref<HTMLElement | null>(null)

	const applyModeAndTheme = () => {
		if (appRef.value) {
			const modeClass = isDarkMode.value ? darkModeName : lightModeName
			appRef.value.setAttribute('nuitral-theme', themeName.value)
			appRef.value.classList.add(modeClass)
			appRef.value.classList.remove(
				isDarkMode.value ? lightModeName : darkModeName
			)
		}
	}

	const toggleMode = () => {
		isDarkMode.value = !isDarkMode.value
		saveToStorage(isDarkMode.value, themeName.value)
		applyModeAndTheme()
	}

	const manageTheme = (t: string) => {
		themeName.value = t
		saveToStorage(isDarkMode.value, themeName.value)
		applyModeAndTheme()
	}

	onMounted(() => {
		appRef.value = document.getElementById(rootId)
		applyModeAndTheme()
	})

	return { manageDarkMode: toggleMode, isDarkMode, manageTheme }
}

export default useNuitralTheming
