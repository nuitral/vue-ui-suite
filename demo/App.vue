<script lang="ts" setup>
import {
	NuitralIcon,
	NuitralButton,
	NuitralBox,
	NuitralInput,
	NuitralTab,
	NuitralTabs,
	useNuitralTheming,
} from '../lib'
import { ref, shallowRef } from 'vue'

const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({
	theme: 'nuitral',
	darkMode: false,
	rootId: 'demo-app',
})

const inputModel = ref('Input test')
</script>

<template>
	<button @click="manageDarkMode">
		{{ isDarkMode ? 'Set light mode' : ' Set dark mode' }}
	</button>
	<button @click="manageTheme('nuitral')">Set nuitral theme</button>
	<button @click="manageTheme('pop')">Set pop theme</button>
	<h1>nuitral Vue UI Suite</h1>

	<NuitralTabs :selected="1">
		<NuitralTab label="Tab A" icon="user"> Content of A </NuitralTab>
		<NuitralTab label="Tab B" icon="basket" iconPosition="right">
			Content of B
		</NuitralTab>
		<NuitralTab label="Tab C"> Content of C </NuitralTab>
		<NuitralTab v-for="num in 5" :key="num" :label="'Tab ' + num">
			{{ num }}
		</NuitralTab>
	</NuitralTabs>

	<NuitralInput
		v-model="inputModel"
		:placeholder="'placeholder'"
		:icon="'user'"
	></NuitralInput>
	<NuitralInput
		v-model="inputModel"
		:placeholder="'placeholder'"
		:icon="'user'"
		type="password"
		:icon-position="'right'"
	></NuitralInput>
	<NuitralInput
		v-model="inputModel"
		:placeholder="'placeholder'"
		:disabled="true"
	></NuitralInput>
	{{ inputModel }}
	<NuitralButton accent icon="user"> Button </NuitralButton>
	<NuitralButton primary icon="user"></NuitralButton>
	<NuitralButton primary icon="user" iconPosition="right" disabled>
		<template #leftSide> Left Side </template>
	</NuitralButton>
	<NuitralButton primary icon="user" iconPosition="right" disabled>
		<template #rightSide> Right Side </template>
	</NuitralButton>
	<NuitralBox
		:title="'Title'"
		:description="'Description'"
		primary
	></NuitralBox>
	<NuitralIcon :icon="'user'"></NuitralIcon>
</template>
