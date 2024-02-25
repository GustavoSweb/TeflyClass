import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";

// Use plugin defaults (optional)

// Use the components

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(setupCalendar, {});
  nuxtApp.vueApp.component("VCalendar", Calendar);
  nuxtApp.vueApp.component("VDatePicker", DatePicker);
});
