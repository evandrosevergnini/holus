export default {
  mounted(el, binding) {
    el.__FocusOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('focusin', el.__FocusOutsideHandler__)
  },
  beforeUnmount(el) {
    document.body.removeEventListener('focusin', el.__FocusOutsideHandler__)
  },
}
