<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab" @click.prevent="openCollapse(itemData.id)">
      <b-button  block href="#"  variant="info">{{ itemData.name }}</b-button>
    </b-card-header>
    <b-collapse :id="'accordion-' + itemData.id" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>Updated at : {{ itemData.updated_at }}</b-card-text>
        <b-link :href="itemData.html_url" class="card-link">Link to repo</b-link>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {Iitem} from '../interfaces/interfaces';

@Component
export default class CollapseItem extends Vue {
  @Prop() private itemData!: Iitem;

  openCollapse(id : number) {
   this.$root.$emit('bv::toggle::collapse', 'accordion-' + id)
  }

}
</script>

<style scoped>

</style>
