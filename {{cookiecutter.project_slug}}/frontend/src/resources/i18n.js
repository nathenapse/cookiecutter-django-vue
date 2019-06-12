import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    signup: "Sign up",
    verify: "Verify",
    username: "Username",
    password: "Password",
    email: "Email",
    recover: "Recover",
    login: "Login",
    logout: "Log Out",
    "confirm password": "Confirm Password",
    "go back to login": "Go back to Login",
    "forgot password?": "Forgot Password?",
    "don't have an account?": "Don't have an account?"
  },
  am: {
    signup: "ይመዝገቡ",
    username: "ልዩ ስም",
    password: "ይለፍ ቃል",
    email: "ኢሜል",
    recover: "የይለፍ ቃል አግኝ",
    login: "ይግቡ",
    "confirm password": "ይለፍ ቃል ያረጋግጡ",
    "go back to login": "ወደ መግቢያ ይመለሱ",
    "forgot password?": "ይለፍ ቃል ረሱ?",
    "don't have an account?": "አልተመዘገቡም?"
  }
};

export const i18n = new VueI18n({
  locale: "am", // set locale
  fallbackLocale: "en",
  messages
});
