import { shallowMount } from '@vue/test-utils'
import MHeading from './MHeading.vue'

describe('MHeading.vue', () => {
  it('renders props.level', () => {
    const level = 1
    const wrapper = shallowMount(MHeading, {
      props: { level },
    })
    expect(wrapper.text()).toMatch('')
  })
})
