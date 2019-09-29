<template>
  <div class="vue-view-observer" ref="vue-view-observer">
    <slot />
  </div>
</template>

<script>
import viewObserver from "view-observer";

export default {
  props: {
    once: {
      type: [Boolean],
      default: false
    }
  },
  methods: {
    // Observer
    observe(node) {
      return viewObserver().observe([node]);
    },
    // Subscript
    script(callback, io) {
      return callback && callback(io.isIntersecting, io);
    },
    // Init
    init($io, $node, $event) {
      this.once === true
        ? $io.subscribeOnce($node, io => this.script($event, io))
        : $io.subscribe(
            $node,
            io => this.script($event, io),
            io => this.script($event, io)
          );
    }
  },
  // isIntersecting
  mounted() {
    // Node
    const $node = this.$refs["vue-view-observer"];

    // Event
    const { subscribe } = this.$listeners || new Function();

    // Observer
    const $io = this.observe($node);

    // Init
    this.init($io, $node, subscribe);
  }
};
</script>
