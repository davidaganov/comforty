import { shallowMount } from "@vue/test-utils"
import Button from "@/components/Base/Button.vue"

describe("Button.vue", () => {
  it("renders props.msg when passed", () => {
    const text = "new message"
    const wrapper = shallowMount(Button, {
      props: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
