<template>
  <v-text-field
    reverse
    flat
    :label="input"
    dense
    v-model="inputValues[input]"
  ></v-text-field>
</template>

<script>
export default {
  name: "TextFieldsComponent",
  data: () => ({

  }),
  props: {
    label: {
      type: String,
      required: true,
      default: () => null
    },
    inputValue: {
      type: Array,
      required: true,
      default: () => null
    },
    prependIcon: {
      type: String,
      required: false
    },
    appendIcon: {
      type: String,
      required: false,
      default: () => null
    }
  }
}
</script>

<style>

</style>