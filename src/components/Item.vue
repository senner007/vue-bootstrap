<template>
  <b-card no-body class="mb-1" @click="toggleItem" >
    <b-button block href="#" variant="info">Accordion 1</b-button>

    <b-collapse
      id="accordion-1"
 
      :collaped="toggled"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text>{{ itemData.name}}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class Item extends Vue {
  @Prop() private itemData!: object;

  toggled = false

  toggleItem() {
    console.log('hello')
        this.toggled = !this.toggled;
    }
}
</script>
