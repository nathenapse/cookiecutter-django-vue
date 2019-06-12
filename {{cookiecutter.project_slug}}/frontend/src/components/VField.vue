<template>
  <b-field
    :type="form.errors.has(field) ? 'is-danger' : ''"
    :message="form.errors.get(field)"
    :expanded="expanded"
    @change="changed"
    :pattern="pattern"
  >
    <b-input
      :type="type"
      :size="size"
      v-model="inputVal"
      :pattern="pattern"
      :placeholder="placeholder"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  data() {
    return { inputVal: this.value };
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    field: {
      type: String,
      required: true
    },
    error_field: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {},
    size: {
      type: String
    },
    expanded: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String
    }
  },
  methods: {
    changed(evt) {
      this.$emit("change", evt);
    }
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style></style>
