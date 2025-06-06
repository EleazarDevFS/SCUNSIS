<script>

import AsideComponent from './components/AsideComponent.vue';
import ActiveUser from './components/ActiveUser.vue';
import LoginView from './views/LoginView.vue';
import InicioView from './views/InicioView.vue';
import GenConsView from './views/GenConsView.vue';
import HistorialView from './views/HistorialView.vue';
import ConfiguracionView from './views/ConfiguracionView.vue';

export default {
  name: 'App',
  components: {
    AsideComponent,
    ActiveUser,
    LoginView,
    InicioView,
    GenConsView,
    HistorialView,
    ConfiguracionView
  },
  data() {
    return {
      activeView: 'InicioView' // Vista por defecto
    }
  },
  methods: {
    setActiveView(view) {
      this.activeView = view;
    }
  },
  mounted() {
    document.body.style.background = 'url("public/img/image.png") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
  }
}
</script>
<template>
  <div class="container-app">
    <template v-if="$route.path === '/'">
      <div class="login-center">
         <LoginView/>
      </div>
    </template>
    <template v-else>
      <ActiveUser class="header" />
      <div class="layout-body">
        <AsideComponent class="aside" @change-view="setActiveView" />
        <main class="main-content">
          <component :is="activeView" />
        </main>
      </div>
    </template>
  </div>

</template>

<style>
* {
  font-family: 'Poppins', sans-serif;
  ;

}
.login-center {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url("public/img/image.png") no-repeat center center fixed; */
}

.container-app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.header {
  width: 100%;
}

.layout-body {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: calc(100vh - 80px);
  min-height: 0;
}


.main-content {
  flex: 1 1 0%;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
}

.aside {
  height: 100vh;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  flex: 0 0 250px;
  box-sizing: border-box;
}
</style>
