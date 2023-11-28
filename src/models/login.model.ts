import type { LogInInterface } from '@/interfaces/login.interface';

class LogInModel {
  data: LogInInterface;
  labels: LogInInterface;
  rules = {
    username: { required: true, message: 'Необходимое поле', trigger: 'blur' },
    password: {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any) => {
        return new Promise<void>((resolve, reject) => {
          if (!value) {
            reject(new Error('Необходимое поле'));
          } else if (value.length < 6) {
            return reject(new Error('Пароль должен содержать больше 6-ти символов'));
          } else {
            resolve();
          }
        });
      }
    }
  };

  constructor() {
    this.data = { username: '', password: '' };
    this.labels = { username: 'имя пользователя', password: 'пароль' };
  }
}

export default new LogInModel();
