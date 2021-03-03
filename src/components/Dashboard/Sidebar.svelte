<script lang='ts'>
    import Fa from 'svelte-fa'
    import { faBars, faHome, faCogs, faTable, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

    interface IUser {
        showSideBar: boolean
    }

    const user = {
        showSideBar : true
    }

    const handleClick = () => {
		user.showSideBar = !user.showSideBar
	}
</script>

<style lang='postcss'>
    /* your styles go here */
    .sidebar-conytainer {
        @apply px-2 overflow-y-auto h-screen w-full
    }
    .logo-and-icon {
        @apply flex justify-between items-center px-4
    }
    .logo {
        @apply w-24 h-20 
    }
    .sidebar-list-lg li {
        @apply text-lg font-light flex items-center py-4 px-4 cursor-pointer hover:bg-blue-50 transition-all duration-100 delay-100 ease-in-out rounded  text-gray-500
    }
    .sidebar-list-sm li {
        @apply text-sm font-light flex items-center py-4 px-6 cursor-pointer hover:bg-blue-50 transition-all duration-100 delay-100 ease-in-out rounded  text-gray-500
    }
    span {
        @apply tracking-wider capitalize ml-4
    }
</style>

<!-- Sidebar Component goes here -->
<div class='{user.showSideBar ? 'w-64 duration-500' : 'w-toggle duration-500'} lg:block hidden'>
    <div class='sidebar-conytainer'>
        <div class='logo-and-icon'>
            <img class='{user.showSideBar ? 'logo duration-500' : 'hidden duration-500'}' src="images/logo-r.png" alt="">
            <div on:click={handleClick} class='h-20 flex items-center justify-center'>
                <Fa class='cursor-pointer text-2xl text-gray-400' icon={faBars} />
            </div>
        </div>
        <ul class='{user.showSideBar ? 'sidebar-list-sm' : 'sidebar-list-lg'}'>
            <li>
                <Fa class='text-blue-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-red-400' icon={faCogs}/>{#if user.showSideBar}<span>setting</span>{/if}
            </li>
            <li>
                <Fa class='text-green-400' icon={faTable}/>{#if user.showSideBar}<span>tables</span>{/if}
            </li>
            <li>
                <Fa class='text-purple-400' icon={faMapMarkedAlt}/>{#if user.showSideBar}<span>maps</span>{/if}
            </li>
            <li>
                <Fa class='text-yellow-600' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-pink-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-gray-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>

            <li>
                <Fa class='text-blue-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-red-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-green-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-purple-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-yellow-600' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-pink-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>
            <li>
                <Fa class='text-gray-400' icon={faHome}/>{#if user.showSideBar}<span>dashboards</span>{/if}
            </li>

        </ul>
    </div>
</div>