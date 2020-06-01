<template>
  <div class="message-alert bg-light rounded text-center">
    <div class="alert alert-dismissible p-1 m-0" v-for="(item, i) in messages" :key="i">
      <i class="fas fa-clipboard-check fa-5x mt-5 text-success"></i>
      <h4 class="p-4">預約成功</h4>
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage() {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 2500);
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('reservationDone', () => {
      vm.updateMessage();
    });
  },
};

</script>

<style lang="scss" scoped>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 40%;
  right: 45%;
  z-index: 1100;
}

@media (max-width: 768px) {
  .message-alert {
    max-width: 80%;
    top: 40%;
    right: 35%;
  }
}
@media (max-width: 375px) {
  .message-alert {
    max-width: 80%;
    top: 40%;
    right: 25%;
  }
}
</style>
