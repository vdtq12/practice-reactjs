import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
        email: 'Email',
          login: 'Log In',
          userName: 'User Name',
          password: 'Password',
          'remember-me': 'Remember me',
          'forgot-password': 'Forgot password ?',
          'dont have account yet ? ': 'Don\'t have account yet ? ',
          'sign up': 'Sign Up',
          'your email': 'Your email',
          'your password': 'Your password'
        }
      },
      vi: {
        translation: {
            email: 'Email',
            login: 'Đăng Nhập',
            userName: 'Tên Người Dùng',
            password: 'Mật Khẩu',
            'remember-me': 'Ghi nhớ tôi',
            'forgot-password': 'Quên mật khẩu ?',
            'dont have account yet ? ': 'Chưa có tài khoản ? ',
            'sign up': 'Đăng ký',
            'your email': 'Nhập email của bạn',
          'your password': 'Nhập password của bạn'
        }
      }
    }
  });

export default i18n;