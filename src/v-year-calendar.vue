<template>
  <div></div>
</template>

<script>
import JsCalendar from 'js-year-calendar';
import 'js-year-calendar/dist/js-year-calendar.css';

export default {
  name: 'Calendar',
  mounted: function() {
      this.calendar = new JsCalendar(this.$el);
  }
}
</script>