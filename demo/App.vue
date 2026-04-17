<script lang="ts" setup>
import {
    NuitralBox,
    NuitralButton,
    NuitralCard,
    NuitralIcon,
    NuitralInput,
    NuitralTab,
    NuitralTabs,
    NuitralChip,
    NuitralList,
    useNuitralTheming,
} from '../lib'
import { ref } from 'vue'
import DemoComponentOne from './demoComponents/DemoComponentOne.vue'
import DemoComponentTwo from './demoComponents/DemoComponentTwo.vue'
import { NuitralTabProps } from '../lib/components/tab/types'

const { isDarkMode, manageDarkMode, manageTheme } = useNuitralTheming({
    theme: 'nuitral',
    darkMode: false,
    rootId: 'demo-app',
    saveSettings: true,
})

const inputModel = ref('Input test')

const tabItems = ref<Partial<NuitralTabProps>[]>([
    {
        label: 'A',
        icon: 'user',
        component: DemoComponentOne,
    },
    { label: 'B', icon: 'basket', component: DemoComponentTwo },
    { label: 'C', icon: 'basket', component: null, disabled: true },
])

const testButton = () => {
    tabItems.value[1].component = DemoComponentOne
    tabItems.value[1].label = 'Test ref Tab'
}
</script>

<template>
    <button @click="manageDarkMode">
        {{ isDarkMode ? 'Set light mode' : ' Set dark mode' }}
    </button>
    <button @click="manageTheme('nuitral')">Set nuitral theme</button>
    <button @click="manageTheme('pop')">Set pop theme</button>
    <h1>nuitral Vue UI Suite</h1>
    <br />
    <div class="mb-2">
        <NuitralList justify="end">
            <template v-slot:start>A</template>
            End Content
            <template v-slot:end>B</template>
        </NuitralList>
    </div>
    <div class="mb-2">
        <NuitralList justify="center">
            <template v-slot:start>A</template>
            Center content
            <template v-slot:end>B</template>
        </NuitralList>
    </div>
    <div class="mb-2">
        <NuitralList>
            <template v-slot:start>A</template>
            Start content
            <template v-slot:end>B</template>
        </NuitralList>
    </div>

    <div class="mb-2" style="height: 200px">
        <NuitralList direction="vertical">
            <template v-slot:start>A</template>
            a
            <template v-slot:end>B</template>
        </NuitralList>
    </div>

    <br>

    <div class="flex gap-2">
        <NuitralChip primary icon="basket">
            Chip Primary
        </NuitralChip>
        <NuitralChip secondary icon="basket" icon-position="right">
            Chip Secondary
        </NuitralChip>
        <NuitralChip accent>Chip accent</NuitralChip>
        <NuitralChip error>Chip error</NuitralChip>
        <NuitralChip success>Chip Success</NuitralChip>
        <NuitralChip warning>Chip warning</NuitralChip>
        <NuitralChip info>Chip info</NuitralChip>
        <NuitralChip neutral>Chip neutral</NuitralChip>
        <NuitralChip background>Chip background</NuitralChip>
        <NuitralChip surface>Chip surface</NuitralChip>
    </div>
    <div class="mb-2"></div>
    <div class="flex">
        <NuitralChip primary-gloss icon="basket">
            Chip Primary
        </NuitralChip>
        <NuitralChip secondary-gloss icon="basket" icon-position="right">
            Chip Secondary
        </NuitralChip>
        <NuitralChip accent-gloss>Chip accent</NuitralChip>
        <NuitralChip error-gloss>Chip error</NuitralChip>
        <NuitralChip success-gloss>Chip Success</NuitralChip>
        <NuitralChip warning-gloss>Chip warning</NuitralChip>
        <NuitralChip info-gloss>Chip info</NuitralChip>
        <NuitralChip neutral-gloss>Chip neutral</NuitralChip>
        <NuitralChip background-gloss>Chip background</NuitralChip>
        <NuitralChip surface-gloss>Chip surface</NuitralChip>
    </div>
    <div class="mb-2"></div>
    <div class="flex">
        <NuitralChip primary-outline icon="basket">
            Chip Primary
        </NuitralChip>
        <NuitralChip secondary-outline icon="basket" icon-position="right">
            Chip Secondary
        </NuitralChip>
        <NuitralChip accent-outline>Chip accent</NuitralChip>
        <NuitralChip error-outline>Chip error</NuitralChip>
        <NuitralChip success-outline>Chip Success</NuitralChip>
        <NuitralChip warning-outline>Chip warning</NuitralChip>
        <NuitralChip info-outline>Chip info</NuitralChip>
        <NuitralChip neutral-outline>Chip neutral</NuitralChip>
        <NuitralChip background-outline>Chip background</NuitralChip>
        <NuitralChip surface-outline>Chip surface</NuitralChip>
    </div>
    <div class="mb-2"></div>

    layout
    <div class="layout-flex mb-4">
        <div class="col-1 nuitral-background-primary-300">1</div>
        <div class="col-2 nuitral-background-primary-400">2</div>
        <div class="col-3 nuitral-background-primary-500">3</div>
        <div class="col-6 nuitral-background-primary-600">6</div>
    </div>

    <div class="layout-flex mb-4">
        <div class="col nuitral-background-secondary-300">col</div>
        <div class="col nuitral-background-secondary-400">col</div>
        <div class="col-auto nuitral-background-secondary-500">col-auto</div>
    </div>

    <div class="layout-flex mb-4">
        <div class="col-auto nuitral-background-secondary-300">col-auto</div>
        <div class="col-auto nuitral-background-secondary-500">col-auto</div>
    </div>

    <div class="layout-flex mb-4">
        <div
            class="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-300"
        >
            mobile-col-12 tablet-col-6 laptop-col-3
        </div>
        <div
            class="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-400"
        >
            mobile-col-12 tablet-col-6 laptop-col-3
        </div>
        <div
            class="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-500"
        >
            mobile-col-12 tablet-col-6 laptop-col-3
        </div>
        <div
            class="mobile-col-12 tablet-col-6 laptop-col-3 nuitral-background-accent-600"
        >
            mobile-col-12 tablet-col-6 laptop-col-3
        </div>
    </div>

    <div class="layout-flex mb-4">
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-300"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-500"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-700"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
        <div
            class="xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nuitral-background-success-900"
        >
            xs-col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2
        </div>
    </div>

    <NuitralCard background-400 border-accent>
        <template #header>Header</template>
        Body
        <template #footer>Footer</template>
    </NuitralCard>
    <br />
    <NuitralCard background-100 hasShadow>
        <template #header>Header</template>
        Body
        <template #footer>Footer</template>
    </NuitralCard>
    <br />
    <NuitralCard background-400 border-primary>
        <template #header>Header</template>
        Body
        <template #footer>Footer</template>
    </NuitralCard>
    <br />
    <button @click="testButton">test tab</button>

    <NuitralTabs
        primary
        :selected="0"
        :items="tabItems"
        @onSelection="
            $event => {
                console.log($event)
            }
        "
    ></NuitralTabs>

    <NuitralTabs
        accent
        :selected="1"
        @onSelection="
            $event => {
                console.log($event)
            }
        "
    >
        <NuitralTab label="Tab A" icon="user">
            <template #leftSide>L</template>
            <template #rightSide>R</template>
            Content of A
        </NuitralTab>
        <NuitralTab
            label="Tab B"
            :disabled="true"
            icon="basket"
            iconPosition="right"
        >
            Content of B
        </NuitralTab>
        <NuitralTab label="Tab C"> Content of C</NuitralTab>
        <NuitralTab v-for="num in 5" :key="num" :label="'Tab ' + num">
            <template #leftSide>Left {{ num }}</template>
            <template #rightSide>Right {{ num }}</template>
            Content of {{ num }}
        </NuitralTab>
        <NuitralTab label="Component Two">
            <DemoComponentTwo />
        </NuitralTab>
    </NuitralTabs>
    <br />
    <div class="flex">
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
    </div>

    <br />
    <NuitralButton accent icon="user"> Button</NuitralButton>
    <NuitralButton primary icon="user"></NuitralButton>
    <NuitralButton primary icon="user" iconPosition="right" disabled>
        <template #leftSide> Left Side</template>
    </NuitralButton>
    <NuitralButton primary icon="user" iconPosition="right" disabled>
        <template #rightSide> Right Side</template>
    </NuitralButton>
    <br />
    <NuitralBox
        :title="'Title'"
        :description="'Description'"
        primary
    ></NuitralBox>
    <br />
    <NuitralIcon :icon="'user'"></NuitralIcon>
    <br />
</template>
