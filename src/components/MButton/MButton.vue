<template>
  <button class="holus-button" :class="classes" :type="type" :aria-label="loading && ariaLabelLoading ? ariaLabelLoading : ariaLabel" @click="action">
    <slot v-if="!loading">{{ label || ariaLabel }}</slot>
    <slot v-else name="loading">Loading</slot>
  </button>
</template>

<script>
import '../../assets/css/styles.css'
export default {
  name: 'HolusButton',
  props: {
    ariaLabel: { type: String, required: true, validator: (prop) => prop.length > 0 },
    ariaLabelLoading: { type: String, default: null },
    block: { type: Boolean, default: false },
    skin: { type: String, validator: (prop) => ['default', 'primary', 'success', 'info', 'alert', 'error'].includes(prop) },
    label: { type: String, default: null, validator: (prop) => prop.length > 0 },
    loading: { type: Boolean, default: false },
    outline: Boolean,
    rounded: Boolean,
    size: { type: String, default: 'normal', validator: (prop) => ['small', 'normal', 'large'].includes(prop) },
    type: { type: String, default: 'submit', validator: (prop) => ['button', 'reset', 'submit'].includes(prop) },
    uppercase: Boolean,
  },
  computed: {
    classes() {
      return {
        'holus-button--block': this.block,
        [`holus-button--${this.skin}`]: !!this.skin,
        'holus-button--outline': this.outline,
        'holus-button--rounded': this.rounded,
        [`holus-button--${this.size}`]: !!this.size && this.size !== 'normal',
        'holus-button--uppercase': this.uppercase,
      }
    },
  },
  methods: {
    action(evt) {
      evt?.target?.focus()
    },
  },
  mounted() {
    this.$el.style.minWidth = window.getComputedStyle(this.$el).getPropertyValue('width')
  },
}
</script>

<style lang="css" scoped>
@import 'MButton.css';
</style>
