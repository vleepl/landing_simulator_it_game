import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
  NSpin,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NCard
} from 'naive-ui';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('n-spin', NSpin);
app.component('n-space', NSpace);
app.component('n-layout', NLayout);
app.component('n-layout-header', NLayoutHeader);
app.component('n-layout-content', NLayoutContent);
app.component('n-btn', NButton);
app.component('n-form', NForm);
app.component('n-form-item', NFormItem);
app.component('n-input', NInput);
app.component('n-card', NCard);

app.mount('#app');
