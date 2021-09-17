import MHeading from './MHeading.vue'

export default {
  title: 'Holus/Components/Heading',
  component: MHeading,
  argTypes: {
    level: { type: 'number' },
  },
}

const Template = (args) => ({
  //props: Object.keys(argTypes),
  components: { MHeading },
  setup() {
    return args
  },
  template: `<MHeading v-bind="args">${args.default}</MHeading>`,
})

export const H1 = Template.bind({})
let level = 1
H1.args = {
  level,
  default: `h${level}: Heading level`,
}
H1.parameters = {
  docs: {
    source: {
      code: `<MHeading :level="1">${H1.args.default}</MHeading>`,
    },
  },
}
export const H2 = Template.bind({})
level = 2
H2.args = {
  level,
  default: `h${level}: Heading level`,
}
H2.parameters = {
  docs: {
    source: {
      code: `<m-heading :level="${level}">${H2.args.default}</m-heading>`,
    },
  },
}
export const H3 = Template.bind({})
level = 3
H3.args = {
  level,
  default: `h${level}: Heading level`,
}
H3.parameters = {
  docs: {
    source: {
      code: `<m-heading :level="${level}">${H3.args.default}</m-heading>`,
    },
  },
}
export const H4 = Template.bind({})
level = 4
H4.args = {
  level,
  default: `h${level}: Heading level`,
}
H4.parameters = {
  docs: {
    source: {
      code: `<m-heading :level="${level}">${H4.args.default}</m-heading>`,
    },
  },
}
export const H5 = Template.bind({})
level = 5
H5.args = {
  level,
  default: `h${level}: Heading level`,
}
H5.parameters = {
  docs: {
    source: {
      code: `<m-heading :level="${level}">${H5.args.default}</m-heading>`,
    },
  },
}
export const H6 = Template.bind({})
level = 6
H6.args = {
  level,
  default: `h${level}: Heading level`,
}
H6.parameters = {
  docs: {
    source: {
      code: `<m-heading :level="${level}">${H6.args.default}</m-heading>`,
    },
  },
}
