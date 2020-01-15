<template>
  <div class="common-bg">
    <comtop></comtop>
    <router-view />
    <comfoot></comfoot>
  </div>
</template>

<script>
import comtop from "../../components/common/CommonTop";
import comfoot from "../../components/common/CommonFoot";
export default {
  data() {
    return {};
  },
  components: {
    comtop,
    comfoot
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.common-bg {
  background: #f8f8f8;
}
</style>