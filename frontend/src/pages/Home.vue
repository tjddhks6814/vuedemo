<template>
    <div class="home">
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="(item, idx) in state.items" :key="idx">
                <!-- Vue는 props 사용 할 떄 :값으로 보냄  -->
                <Card :item="item"/>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import axios from 'axios'
import { reactive } from 'vue'
export default {
    name: 'Home',
    components: { Card },
    setup () {
        const state = reactive({
            items: []
        })

        axios.get('/api/items').then(({ data }) => {
            state.items = data
        })

        return { state }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
