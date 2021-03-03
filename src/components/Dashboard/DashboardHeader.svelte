<script lang='ts'>
    import Fa from 'svelte-fa'
    import { faSearch, faBell, faSortDown, faCopy } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang='postcss'>
    /* your styles go here */
    .d-bnord-header {
        @apply py-4 px-6 flex justify-between items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    }
    .header-row {
        @apply flex items-center
    }
    .d-bnord-header .serch-input{
        @apply outline-none px-4 py-3 rounded-full bg-red-50 shadow-inner
    }
    .d-bnord-header .serch-input input{
        @apply outline-none bg-transparent
    }
    .serch-input {
        @apply w-80 text-gray-700
    }
    .user-name {
        @apply text-red-100 font-semibold tracking-wide text-lg ml-3 hover:opacity-70 transition-all duration-100 delay-100 ease-in-out cursor-pointer
    }
    .user-icons {
        @apply text-red-100 font-semibold tracking-wide hover:opacity-70 transition-all duration-100 delay-100 ease-in-out cursor-pointer
    }
</style>

<!-- Dashboard Header component goes here -->
<div class='d-bnord-header'>
    <div class='shadow rounded-full'>
       <div class='serch-input header-row'>
            <Fa class='text-sm text-gray-500 font-light mr-3 cursor-pointer' icon={faSearch} />
            <input type="text" placeholder='Search'>
        </div> 
    </div>
    
    <div class='header-row'>
        <div class='header-row user-icons mr-8'>
            <Fa class='mr-2' icon={faBell} />
            <Fa icon={faSortDown} />
        </div>
        <div class='header-row user-icons mr-8'>
            <Fa class='mr-2' icon={faCopy} />
            <Fa icon={faSortDown} />
        </div>
        <div class='header-row'>
            <div class="w-12 h-12 rounded-full overflow-hidden shadow">
                <img src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
            </div>
            <h2 class='user-name'>Jon Smith</h2>
        </div>
    </div>
</div>