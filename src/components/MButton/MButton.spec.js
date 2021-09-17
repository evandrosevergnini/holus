import { shallowMount } from '@vue/test-utils'
import MButton from '@/components/MButton/MButton.vue'

describe('MButton.vue', () => {
  it('renders props.ariaLabel', () => {
    const ariaLabel = 'Button'
    const wrapper = shallowMount(MButton, {
      props: { ariaLabel },
    })
    expect(wrapper.text()).toMatch(ariaLabel)
  })
})
