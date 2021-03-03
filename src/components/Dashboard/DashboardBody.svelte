<script lang='ts'>
    import DashboardHeader from './DashboardHeader.svelte'
    import CardLineChart from "../Cards/CardLineChart.svelte";
    import CardBarChart from "../Cards/CardBarChart.svelte";
    import CardPageVisits from "../Cards/CardPageVisits.svelte";
    import CardSocialTraffic from "../Cards/CardSocialTraffic.svelte";
</script>

<style>
    /* your styles go here */
</style>

<!-- Dashboard Body goes here -->
<DashboardHeader /> 
<div class="p-4 md:p-10 mx-auto w-full">
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardLineChart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardBarChart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardPageVisits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardSocialTraffic />
      </div>
    </div>
  </div>