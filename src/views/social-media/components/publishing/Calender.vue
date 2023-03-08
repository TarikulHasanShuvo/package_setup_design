<template>
<div class="w-100">
  <vue-cal
      :disable-views="['years', 'year', 'month']"
      :time-from="7 * 60"
      :time-to="20 * 60"
      :special-hours="specialHours" />
</div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
name: "Calender",
  components: { VueCal },
  data(){
  return{
    specialHours: {
      1: {
        from: 8 * 60,
        to: 17 * 60,
        class: 'doctor-1',
        label: 'Doctor 1Full day shift'
      },
      2: {
        from: 9 * 60,
        to: 18 * 60,
        class: 'doctor-2',
        label: 'Doctor 2Full day shift'
      },
      3: [
        {
          from: 8 * 60,
          to: 12 * 60,
          class: 'doctor-1',
          label: 'Doctor 1Morning shift'
        },
        {
          from: 14 * 60,
          to: 19 * 60,
          class: 'doctor-3',
          label: 'Doctor 3Afternoon shift'
        }
      ],
      4: {
        from: 8 * 60,
        to: 17 * 60,
        class: 'doctor-1',
        label: 'Doctor 1Full day shift'
      },
      5: {
        from: 9 * 60,
        to: 18 * 60,
        class: 'doctor-3',
        label: 'Doctor 3Full day shift'
      },
      6: {
        from: 9 * 60,
        to: 18 * 60,
        class: 'doctor-2',
        label: 'Doctor 2Full day shift'
      },
      7: {
        from: 7 * 60,
        to: 20 * 60,
        class: 'closed',
        label: 'Closed'
      }
    }
  }
  },
}
</script>

<style scoped>
</style>