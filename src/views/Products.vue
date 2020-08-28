<template>
    <div>
        <Filters />
        <ProductsList />
    </div>
</template>

<script>
import Filters from '../components/Filters'
import ProductsList from '../components/Products/ProductsList'
    export default {
        components: {
            ProductsList,
            Filters
        }
    }
</script>

<style lang="scss" scoped>

</style>