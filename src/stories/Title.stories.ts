import BaseTitle from "../components/Base/BaseTitle.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Title",
  component: BaseTitle
} as Meta<typeof BaseTitle>

const Template: StoryFn<typeof BaseTitle> = (args) => ({
  components: { BaseTitle },
  template: `
    <BaseTitle>
      <template v-slot>${args.default}</template>
    </BaseTitle>
  `
})

export const Title = Template.bind({})
Title.args = {
  default: "Heading"
}
