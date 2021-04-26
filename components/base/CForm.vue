// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <form class="c-form" @submit.prevent="submit">
    <CFields ref="form" v-model="form" @status="saveStatus" :schema="schema" />
    <div class="c-form_buttons">
      <CButton hollow class="c-form_buttons_cancel">Annuler</CButton>
      <CButton class="c-form_buttons_submit">Valider</CButton>
    </div>
  </form>
</template>
<script>
import CFields from "~/components/base/CFields";
import CButton from "~/components/base/CButton";
import CCard from "~/components/base/CCard";
export default {
  components: {
    CFields,
    CButton,
    CCard
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {},
      busy: false,
      status: null
    };
  },
  methods: {
    submit() {
      this.busy = true;
      this.$refs.form.validate();
      if (this.status.invalid) {
        this.busy = false;
        return;
      }
      this.$emit("submit", this.form);
    },
    saveStatus(status) {
      this.status = status;
    }
  }
};
</script>
<style lang="scss" scoped>
.c-form_buttons{
    @include flex-row_end_center;
    width: 100%;
    text-align: right;
    margin-top: $rem-48;
    .c-form_buttons_submit{
        margin-left: $rem-8;
    }
}
</style>
