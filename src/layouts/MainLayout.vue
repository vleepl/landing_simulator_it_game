<template>
  <div class="wrapper main">
    <!--  <n-space justify="center" align="center">
      <n-spin v-if="load.main"></n-spin>
      <div v-else>тут будет надпись для приветствия</div>
    </n-space>-->
    <n-space vertical size="large" justify="center">
      <n-spin :show="load.main">
        <n-layout>
          <n-layout-header> шапка слоя </n-layout-header>
          <n-layout-content>
            <form-component title="вход" :dataModel="models.login"></form-component>
            <div>{{ models.login.data }}</div>
          </n-layout-content>
        </n-layout>
      </n-spin>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import LogInModel from '@/models/login.model';
import FormComponent from '@/components/FormComponent.vue';

export default defineComponent({
  components: { 'form-component': FormComponent },
  setup() {
    const load = ref({
      main: false
    });

    const models = reactive({
      login: LogInModel
    });

    onMounted(() => {
      load.value.main = true;
      // TODO: check local storage for tokens

      load.value.main = false;
    });

    return {
      load,
      models
    };
  }
});
</script>
