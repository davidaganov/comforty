import { shallowMount } from "@vue/test-utils"
import Button from "@/components/Base/Button.vue"

describe("Button component", () => {
  it("Render link when text is transmitted to the slot", () => {
    const wrapper = shallowMount(Button, {
      props: { link: "#" },
      slots: {
        default: "Test"
      }
    })
    expect(wrapper.text()).toMatch("Test")
    expect(wrapper.find("a").attributes("href")).toBe("#")
  })
  it("Render button when text is transmitted to the slot", () => {
    const wrapper = shallowMount(Button, {
      props: { type: "button" },
      slots: {
        default: "Test"
      }
    })
    expect(wrapper.text()).toMatch("Test")
    expect(wrapper.find("button").attributes("type")).toBe("button")
  })
})
