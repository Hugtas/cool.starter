// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div class="c-fields">
    <component
      class="c-fields_field"
      v-for="(field, key) in schema"
      v-bind="{ ...field }"
      @input="update(key, $event)"
      :key="key"
      :name="key"
      :value="value[key]"
      :is="field.component"
      :hasError="$v.form[key].$error"
      :error="errorMessages[key]"
      :formId="field.formId"
    />
  </div>
</template>
<script>
import { validationRules } from "~/helpers/ValidationParser";
import CInput from "~/components/base/CInput";
import CSelect from "~/components/base/CSelect";
import CToggleInput from "~/components/base/CToggleInput";
export default {
  components: {
    CInput,
    CSelect,
    CToggleInput
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    prefill: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      form: {},
    };
  },
  validations() {
    return {
      form: validationRules(this.schema),
    };
  },
  computed: {
    errorMessages() {
      const validations = this.$v.form;
      return Object.keys(this.schema).reduce((messages, key) => {
        const rules = this.schema[key].validations;
        const rulesKeys = Object.keys(this.schema[key].validations);
        const validator = validations[key];

        if (!validator) return messages;

        for (let rule of rulesKeys) {
          if (validator[rule] !== false) continue;

          messages[key] = rules[rule].message;
          return messages;
        }

        return messages;
      }, {});
    },
  },
  methods: {
    update(key, value) {
      this.form[key] = value;
      this.$v.form[key].$touch();
      this.$emit("input", {
        ...this.value,
        [key]: value,
      });
      this.announceStatus();
    },
    validate() {
      this.$v.$touch();
      this.announceStatus();
    },
    announceStatus() {
      this.$emit("status", {
        invalid: this.$v.$invalid,
      });
    },
  },
  created() {
    for (let name in this.schema) {
      this.$set(this.form, name, null);
    }
    if(this.prefill){
      this.form = this.prefill;
    }
  },
};
</script>
<style lang="scss" scoped>
.c-fields_field:not(:last-of-type){
  margin-bottom: $rem-16;
}
</style>