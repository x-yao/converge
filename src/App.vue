<template>
  <div id="app">
    <div v-for="item in list" @click="opennew(item.path)">{{item.name}}</div>
  </div>
</template>

<script>
import Webview from './components/webview'
import {ipcRenderer,remote} from 'electron'
import {
  test
} from './vuex/actions'


export default {
  data (){
    return {
      list:[{
        name:'css3d',
        path:'/css3d.html'
      }],
      win:null
    }
  },
  vuex: {
    actions: {
      test
    }
  },
  computed :{
    num (){
      return this.$store.state.num
    }
  },
  components: {
    Webview
  },
  methods:{
    alert (){
      ipcRenderer.send('open-error-dialog');
    },
    go (){
      // const w = document.getElementById('w1');
      this.customWebview.src = this.urls;
    },
    opendev (){
      const w = document.getElementById('w1');
      w.openDevTools();
    },
    opennew (url){
      if (this.win == null) {
        this.win = new remote.BrowserWindow({ width: 400, height: 320 });
        this.win.on('close', function () { this.win = null })
        this.win.loadURL(location.origin+url);
        this.win.show()
      }else{
        this.win.loadURL(location.origin+url);
      }
      // win.openDevTools();
    },
    test (...args){
      return this.$store.commit('TEST',...args);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

#w1{
  border:1px solid #CCC;
  height: 603px;
  width: 375px;
}
</style>
