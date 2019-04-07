<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>
    <div role="tablist">
      <ul>
        <li v-for="collapeItem in collapseItems" :key="collapeItem.id">
          <CollapseItem :item-data="collapeItem"></CollapseItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CollapseItem from "./CollapseItem.vue";
import {Iitem} from '../interfaces/interfaces';
import updatedComparer from '../helpers/compare';


@Component({
  components: {
    CollapseItem
  }
})

export default class Collapse extends Vue {
  @Prop() private msg!: string;

  collapseItems: Array<Iitem> = [];
  username : string = "senner007";

  mounted() {
    fetch(
      "https://api.github.com/users/" + this.username + "/repos?per_page=100"
    )
      .then(res => res.json())
      .then((res: Array<Iitem>) => this.collapseItems = res.sort(updatedComparer));
  }
}
</script>

<style scoped>

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }

</style>
