<script lang="ts" setup>
import {
	NuitralIcon,
	NuitralButton,
	NuitralBox,
	useNuitralTheming,
} from '../lib'

const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({
	theme: 'nuitral',
	darkMode: true,
	rootId: 'demo-app',
})
</script>

<template>
	<button @click="manageDarkMode">
		{{ isDarkMode ? 'Set light mode' : ' Set dark mode' }}
	</button>
	<button @click="manageTheme('nuitral')">Set nuitral theme</button>
	<button @click="manageTheme('pop')">Set pop theme</button>
	<h1>nuitral Vue UI Suite</h1>

	<NuitralButton accent-100 icon="user"> Button </NuitralButton>
	<NuitralButton primary icon="user"></NuitralButton>
	<NuitralButton primary icon="user" iconPosition="right" disabled>
		<template #leftSide> Left Side </template>
	</NuitralButton>
	<NuitralButton primary icon="user" iconPosition="right" disabled>
		<template #rightSide> Right Side </template>
	</NuitralButton>
	<NuitralBox
		:title="'title'"
		:description="'Description'"
		primary
	></NuitralBox>
	<NuitralIcon :icon="'user'"></NuitralIcon>
</template>
