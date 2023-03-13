import IconBase from "../components/Icons/IconBase.vue"
import type { Meta, StoryFn } from "@storybook/vue3"

export default {
  title: "Components/UI/Icon",
  component: IconBase
} as Meta<typeof IconBase>

const Template: StoryFn<typeof IconBase> = (args, { argTypes }) => ({
  components: { IconBase },
  props: Object.keys(argTypes),
  template: `
    <IconBase v-bind="$props">
      <path
        d="M40 19.75A5 5 0 0 0 30 20v8.33a1.67 1.67 0 0 0-1.67-1.66H11.67A1.67 1.67 0 0 0 10 28.33V20a5 5 0 1 0-6.67 4.71v8.62A1.67 1.67 0 0 0 5 35h1.67v3.33H10V35h20v3.33h3.33V35H35a1.67 1.67 0 0 0 1.67-1.67v-8.62a5 5 0 0 0 3.32-4.96Z"
      />
      <path
        d="M11.67 20v5h16.66v-5a6.68 6.68 0 0 1 5-6.46V10A8.34 8.34 0 0 0 25 1.67H15A8.34 8.34 0 0 0 6.67 10v3.54a6.68 6.68 0 0 1 5 6.46ZM23.33 8.33a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34Zm0 5a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34Zm-6.66-5a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34Zm0 5a1.67 1.67 0 1 1 0 3.33 1.67 1.67 0 0 1 0-3.33Z"
      />
    </IconBase>
  `
})

export const Icon = Template.bind({})
Icon.args = {
  width: 40,
  height: 40,
  box: "0 0 40 40"
}
