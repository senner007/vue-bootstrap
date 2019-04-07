<template>
  <div role="tablist">
    <ul>
      <li v-for="item in items" :key="item.id">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + item.id" variant="info">Accordion 1</b-button>
          </b-card-header>
          <b-collapse :id="'accordion-' + item.id" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ "fdsf" }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Item from "./Item.vue";

interface Iitem {
  name: string;
  id: number;
}

@Component({
  components: {
    Item
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  items: Array<Iitem> = [
    {
      name: "Buller",
      id: 1
    },
    {
      name: "Linda",
      id: 2
    }
  ];
}
</script>
