import BaseNewsletter from "../components/Form/FormNewsletter.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/Form/Newsletter",
  component: BaseNewsletter
} as Meta<typeof BaseNewsletter>

const Template: StoryFn<typeof BaseNewsletter> = () => ({
  components: { BaseNewsletter },
  template: "<BaseNewsletter />"
})

export const Newsletter = Template.bind({})
