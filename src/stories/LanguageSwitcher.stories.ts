import BaseLanguageSwitcher from "../components/Base/BaseLanguageSwitcher.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/LanguageSwitcher",
  component: BaseLanguageSwitcher
} as Meta<typeof BaseLanguageSwitcher>

const Template: StoryFn<typeof BaseLanguageSwitcher> = () => ({
  components: { BaseLanguageSwitcher },
  template: "<BaseLanguageSwitcher />"
})

export const LanguageSwitcher = Template.bind({})
LanguageSwitcher.args = {}
