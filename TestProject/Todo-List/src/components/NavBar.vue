<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ChangeThemeButton from './ChangeThemeButton.vue';

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm rounded-box mb-4">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <RouterLink to="/" active-class="text-primary">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/star" active-class="text-primary">Star</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" active-class="text-primary">About</RouterLink>
                    </li>
                </ul>
            </div>
            <a class="text-primary font-bold text-xl">Mixsu Todo</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-3 font-bold rounded-box">
                <li class="px-3">
                    <RouterLink to="/" active-class="text-primary">Home</RouterLink>
                </li>
                <li class="px-3">
                    <RouterLink to="/star" active-class="text-primary">Star</RouterLink>
                </li>
                <li class="px-3">
                    <RouterLink to="/about" active-class="text-primary">About</RouterLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <ChangeThemeButton />
        </div>
    </div>
</template>