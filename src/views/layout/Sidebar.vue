<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse" class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#202e3c"
      text-color="#bfcbd9"
      active-text-color="#20a0ff">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>


<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
