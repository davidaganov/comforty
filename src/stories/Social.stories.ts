import BaseSocial from "../components/Base/BaseSocial.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Social",
  component: BaseSocial
} as Meta<typeof BaseSocial>

const Template: StoryFn<typeof BaseSocial> = () => ({
  components: { BaseSocial },
  template: "<BaseSocial />"
})

export const Social = Template.bind({})
