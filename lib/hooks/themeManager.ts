import { ref } from 'vue'

const nuitralTheming = ({
	theme = 'nuitral',
	darkMode = false,
	lightModeName = 'nuitral-light-mode',
	darkModeName = 'nuitral-dark-mode',
	id = 'demo-app',
}) => {
	const isDarkMode = ref<boolean>(darkMode)
	const themeName = ref(theme)
	const appRef = ref<HTMLElement | null>(document.getElementById(id))

	const applyModeAndTheme = (mode: string) => {
		if (appRef.value) {
			appRef.value.setAttribute('nuitral-theme', themeName.value)
			appRef.value.classList.add(mode)
			appRef.value.classList.remove(
				mode === darkModeName ? lightModeName : darkModeName
			)
		}
	}

	const toggleMode = () => {
		isDarkMode.value = !isDarkMode.value
	}

	const manageDarkMode = () => {
		toggleMode()
		if (appRef.value) {
			applyModeAndTheme(isDarkMode.value ? darkModeName : lightModeName)
		}
	}

	const manageTheme = (t: string) => {
		themeName.value = t
		if (appRef.value) {
			applyModeAndTheme(isDarkMode.value ? darkModeName : lightModeName)
		}
	}

	if (appRef.value) {
		applyModeAndTheme(isDarkMode.value ? darkModeName : lightModeName)
	}

	return { manageDarkMode, isDarkMode, manageTheme }
}

export default nuitralTheming
