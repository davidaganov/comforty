import BaseCarouselControl from "../components/Base/BaseCarouselControl.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Control",
  component: BaseCarouselControl
} as Meta<typeof BaseCarouselControl>

const Template: StoryFn<typeof BaseCarouselControl> = () => ({
  components: { BaseCarouselControl },
  template: "<BaseCarouselControl />"
})

export const Control = Template.bind({})
