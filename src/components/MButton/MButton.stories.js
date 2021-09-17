import MButton from './MButton.vue'

export default {
  title: 'Holus/Components/Button/MButton',
  component: MButton,
  argTypes: {
    ariaLabel: { type: 'string' },
    block: { control: 'boolean' },
    label: {
      name: 'label',
      description: 'O rótulo para Tecnologias Assistivas. Caso nem label, nem o slot default sejam utilizdo , será também o rótulo do botão',
      defaultValue: null,
      control: { type: 'text' },
    },
    size: { options: ['small', 'normal', 'large'], control: 'select' },
    skin: { options: ['default', 'primary', 'success', 'info', 'alert', 'error'], control: 'select' },
    type: { options: ['button', 'reset', 'submit'], control: 'select' },
  },
}

const Template = (args) => ({
  components: { MButton },
  setup() {
    return { args }
  },
  template: '<m-button v-bind="args" />',
})

export const Primary = Template.bind({})
const ariaLabel = 'Button'
Primary.args = {
  ariaLabel,
}
Primary.parameters = {
  docs: {
    source: { code: `<m-button aria-label="Button" />` },
  },
}
