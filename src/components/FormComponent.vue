<template>
  <n-card :title="title">
    <n-space justify="center" align="center">
      <n-form ref="formRef" :model="dataModel['data']" :rules="dataModel['rules']">
        <n-form-item
          v-for="propName in Object.keys(dataModel['labels'])"
          :key="propName"
          :label="dataModel['labels'][propName]"
          :path="propName"
        >
          <n-input v-model:value="dataModel['data'][propName]"></n-input>
        </n-form-item>
      </n-form>
    </n-space>
    <n-space justify="space-around">
      <n-btn @click="onClickApplyBtn">войти</n-btn>
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineProps, defineComponent } from 'vue';
import { FormInst, formProps, FormValidationError } from 'naive-ui';
import { computed } from '@vue/reactivity';

export default defineComponent({
  props: { dataModel: Object, title: String },
  setup(props) {
    const formRef = ref<FormInst | null>(null);
    const { dataModel, title } = toRefs(props);

    async function onClickApplyBtn() {
      const isValid = formRef.value
        ?.validate((errors: Array<FormValidationError> | undefined) => {
          if (!errors) {
            console.log('valid');
          } else {
            console.log(errors);
          }
        })
        .then((msg) => console.error('todo: get request to log in'));
    }

    return {
      formRef,
      onClickApplyBtn
    };
  }
});
</script>
