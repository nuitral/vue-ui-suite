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
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import DemoComponentOne from './demoComponents/DemoComponentOne.vue'
import DemoComponentTwo from './demoComponents/DemoComponentTwo.vue'

const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({
	theme: 'nuitral',
	darkMode: false,
	rootId: 'demo-app',
})

const inputModel = ref('Input test')

const tabItems = ref([
	{
		label: 'A',
		icon: 'user',
		component: DemoComponentOne
	},
	{ label: 'B', icon: 'basket', component: DemoComponentTwo },
])
</script>

<template>
	<button @click="manageDarkMode">
		{{ isDarkMode ? 'Set light mode' : ' Set dark mode' }}
	</button>
	<button @click="manageTheme('nuitral')">Set nuitral theme</button>
	<button @click="manageTheme('pop')">Set pop theme</button>
	<h1>nuitral Vue UI Suite</h1>
	<NuitralTabs primary :selected="0" :items="tabItems"></NuitralTabs>
	<NuitralTabs accent :selected="1">
		<NuitralTab label="Tab A" icon="user"
			><template #leftSide>L</template>
			<template #rightSide>R</template> Content of A
		</NuitralTab>
		<NuitralTab label="Tab B" icon="basket" iconPosition="right">
			Content of B
		</NuitralTab>
		<NuitralTab label="Tab C"> Content of C </NuitralTab>
		<NuitralTab v-for="num in 5" :key="num" :label="'Tab ' + num">
			<template #leftSide>Left {{ num }}</template>
			<template #rightSide>Right {{ num }}</template>
			Content of {{ num }}
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
