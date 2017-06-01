<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="text" required>
    <button type="submit">新增</button>
  </form>
</template>
<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    handleSubmit () {
      const { text } = this
      if (!text) return alert('输入内容为空')
      this.$emit('submit', text)
      this.text = ''
    }
  }
}
</script>
