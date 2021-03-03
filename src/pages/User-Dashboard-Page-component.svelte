<script lang='ts'>
    import Sidebar from '../components/Dashboard/Sidebar.svelte'
    import DashboardBody from '../components/Dashboard/DashboardBody.svelte'
</script>

<section id='dashboard-section'>
    <div class="page-section">
        <div class="">
            <div class="flex">
                <Sidebar />
                <div class='w-full bg-purple-50 shadow-inner'>
                    <DashboardBody />
                </div>
            </div>
        </div> 
    </div>
</section>


