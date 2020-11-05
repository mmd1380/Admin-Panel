<template>
  <v-chip
    dir="ltr"
    class="ma-2"
    close
    color="primary"
    outlined
    @click:close="$emit('remove-chip')"
  >{{ propertyName }}: {{ propertyValue }}</v-chip>
</template>

<script>
export default {
  props: {
    propertyName: {
      type: String,
      required: true
    },
    propertyValue: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>