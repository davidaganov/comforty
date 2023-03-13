import BaseLogo from "../components/Base/BaseLogo.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Logo",
  component: BaseLogo
} as Meta<typeof BaseLogo>

const Template: StoryFn<typeof BaseLogo> = () => ({
  components: { BaseLogo },
  template: "<BaseLogo />"
})

export const Logo = Template.bind({})
