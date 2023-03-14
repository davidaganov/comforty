import BaseButton from "../components/Base/BaseButton.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Button",
  component: BaseButton,
  argTypes: {
    appearance: {
      control: {
        type: "select",
        options: ["primary", "ghost", "white", "gray"]
      }
    },
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset", undefined]
      }
    }
  }
} as Meta<typeof BaseButton>

const Template: StoryFn<typeof BaseButton> = (args, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: `
    <BaseButton v-bind="$props">
      <template v-slot>${args.default}</template>
    </BaseButton>
  `
})

export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  appearance: "primary",
  default: "Button"
}

export const ButtonWithArrow = Template.bind({})
ButtonWithArrow.args = {
  default: "Button Ghost",
  arrow: true
}

export const ButtonGhost = Template.bind({})
ButtonGhost.args = {
  appearance: "ghost",
  default: "Button Ghost"
}

export const ButtonGray = Template.bind({})
ButtonGray.args = {
  appearance: "gray",
  default: "Button Gray"
}

export const ButtonWhite = Template.bind({})
ButtonWhite.args = {
  appearance: "white",
  default: "Button White"
}
