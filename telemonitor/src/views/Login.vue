<template>
  <ion-page>
    <label for="username">Username</label>
    <input type="text" id="username" placeholder="username or email" />

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="password" />
  </ion-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexComponent from '@/components/Index.vue'; // @ is an alias to /src

@Component({

})

export default class Login extends Vue {}
</script>