<template>
<base-nav v-model="showMenu" class="navbar-absolute top-navbar" type="white" :transparent="true">
    <div slot="brand" class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{ toggled: $sidebar.showSidebar }">
            <button type="button" class="navbar-toggler" @click="toggleSidebar">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </button>
        </div>
        <a class="navbar-brand ml-xl-3 ml-5" href="#pablo">{{ routeName }}</a>
    </div>

    <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
        <div class="search-bar input-group" @click="searchModalVisible = true">
            <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                <i class="tim-icons icon-zoom-split"></i>
            </button>
            <!-- You can choose types of search input -->
        </div>
        <modal :show.sync="searchModalVisible" class="modal-search" id="searchModal" :centered="false" :show-close="true">
            <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
        </modal>
        <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" title-classes="nav-link" class="nav-item">
            <template slot="title">
                <div class="notification d-none d-lg-block d-xl-block"></div>
                <i class="tim-icons icon-sound-wave"></i>
                <p class="d-lg-none">New Notifications</p>
            </template>
            <template v-for="(notif, index) in notifis">
                <div :key="index">
                    <li class="nav-link">
                        <a :href="urls[index]" target="_blank" class="nav-item dropdown-item"><i class="tim-icons icon-bell-55 text-primary "></i> {{notif}}</a>
                    </li>
                </div>
            </template>
        </base-dropdown>
        <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" class="nav-item" title-classes="nav-link" menu-classes="dropdown-navbar">
            <template slot="title">
                <div class="photo"><img src="img/mike.jpg" /></div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">Log out</p>
            </template>
            <template v-for="(notif, index) in notifis">
                <div :key="index">
                    <li class="nav-link">
                        <a :href="urls[index]" class="nav-item dropdown-item">{{notif}}...</a>
                    </li>
                </div>
            </template>
        </base-dropdown>
    </ul>
</base-nav>
</template>

<script>
import axios from 'axios'
import {
    CollapseTransition
} from 'vue2-transitions';
import {
    BaseNav,
    Modal
} from '@/components';

export default {
    components: {
        CollapseTransition,
        BaseNav,
        Modal
    },
    computed: {
        routeName() {
            const {
                path
            } = this.$route;
            let parts = path.split('/')
            if (parts == ',') {
                return 'Dashboard';
            }
            return parts.map(p => this.capitalizeFirstLetter(p)).join(' ');
        },
        isRTL() {
            return this.$rtl.isRTL;
        }
    },
    data() {
        return {
            activeNotifications: false,
            showMenu: false,
            searchModalVisible: false,
            searchQuery: '',
            notifis: [],
            urls: []
        };
    },
    methods: {
        async run() {
            const database = await axios({
                url: "https://api.covid19api.com/premium/travel/country/india",
                method: 'get',
                headers: {
                    "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
                    "content-type": "application/json"
                }
            })
            for (let i = 0; i < 10; i++) {
                this.notifis.push(Object.values(database.data.Notes)[i].Note.slice(0, 45))
                this.urls.push(Object.values(database.data.Notes)[i].Note.match(/(https?:\/\/[^ ]*)/)[1])
            }
        },
        capitalizeFirstLetter(string) {
            if (!string || typeof string !== 'string') {
                return ''
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        }
    },
    mounted() {
        this.run()
    }
};
</script>

<style scoped>
.top-navbar {
    top: 0px;
}
</style>
