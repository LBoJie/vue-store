<template>
  <div>
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/backend/Navbar.vue';
import Sidebar from '../../components/backend/Sidebar.vue';
import Alert from '../../components/backend/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
};
</script>
