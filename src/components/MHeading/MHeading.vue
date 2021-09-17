<script>
import { h } from 'vue'
import '../../assets/css/styles.css'
export default {
  name: 'MHeading',
  props: {
    level: {
      type: Number,
      default: 2,
      validator: (val) => val >= 0 || val <= 6,
    },
  },
  setup(props, { slots }) {
    return () => h(`h${Math.floor(props.level)}`, { class: 'm-heading' }, slots.default())
  },
}
</script>
<style lang="css" scoped>
@import 'MHeading.css';
</style>
