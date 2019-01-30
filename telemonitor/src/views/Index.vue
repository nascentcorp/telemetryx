<template>
  <ion-page class="index">
    <ion-header>
      Telememon
    </ion-header>
    <!-- Mission List -->
    <ion-list>
      <ion-item-sliding>
        <ion-item> 
          <ion-icon name="jet"></ion-icon>
          <ion-label>Flight In Progress</ion-label>
          <ion-icon name="battery-full"></ion-icon>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option onClick="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item> 
          <ion-icon name="build"></ion-icon>
          <ion-label>Maintenance</ion-label>
          <ion-icon name="battery-full"></ion-icon>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option onClick="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item> 
          <ion-icon name="warning"></ion-icon>
          <ion-label>Warning</ion-label>
          <ion-icon name="battery-full"></ion-icon>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option onClick="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item> 
          <ion-icon name="planet"></ion-icon>
          <ion-label>Grounded</ion-label>
          <ion-icon name="battery-full"></ion-icon>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option onClick="unread(item)">Unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})

export default class Index extends Vue {}
</script>

<style scoped>

  ion-header {
    padding: 10px;
    font-weight: bold;
    font-size: 24pt;
    background-color: cornflowerblue;
    color: white;
  }

  ion-label {
    font-size: 16pt;
    font-weight: bolder;
  }

  ion-icon {
    margin: .3em;
    color: cornflowerblue;
  }

</style>