<template>
    <div class="specification">
        <div class="left">
            <div class="spe--title">
                Spécifications sur les Conteneurs
            </div>
            <div class="table mt-6">
                <div class="table--title text-center"><h4>DRY CONTAINERS</h4></div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td class="text-center" colspan="2">Dry / Steel</td>
                                <td class="text-center" colspan="2">Door openings (mm)</td>
                                <td class="text-center" colspan="2">Internal (mm)</td>
                                <td class="text-center" colspan="2">Weight (kg)</td>
                                <td class="text-center" colspan="3">(m3)</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th class="text-left">Type</th>
                            <th class="text-left">Size</th>
                            <th class="text-left">Width</th>
                            <th class="text-left">Height</th>
                            <th class="text-left">Length</th>
                            <th class="text-left">Width</th>
                            <th class="text-left">Height to load line</th>
                            <th class="text-left">Max. Gross</th>
                            <th class="text-left">Tare</th>
                            <th class="text-left">Max. Payload</th>
                            <th class="text-left">Capacity to load line</th>
                        </tr>
                        <tr v-for="item in specs" :key="item.name">
                            <td>{{ item.type }}</td>
                            <td>{{ item.size }}</td>
                            <td>{{ item.width1 }}</td>
                            <td>{{ item.height }}</td>
                            <td>{{ item.length }}</td>
                            <td>{{ item.width2 }}</td>
                            <td>{{ item.htll }}</td>
                            <td>{{ item.maxGross }}</td>
                            <td>{{ item.tare }}</td>
                            <td>{{ item.maxPayload }}</td>
                            <td>{{ item.ctll }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
            <div class="table mt-10">
                <div class="table--title text-center"><h4>REFER CONTAINERS</h4></div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <td class="text-center" colspan="2">Reefer / Steel</td>
                                <td class="text-center" colspan="2">Door openings (mm)</td>
                                <td class="text-center" colspan="2">Internal (mm)</td>
                                <td class="text-center" colspan="2">Weight (kg)</td>
                                <td class="text-center" colspan="3">(m3)</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th class="text-left">Type</th>
                            <th class="text-left">Size</th>
                            <th class="text-left">Width</th>
                            <th class="text-left">Height</th>
                            <th class="text-left">Length</th>
                            <th class="text-left">Width</th>
                            <th class="text-left">Height to load line</th>
                            <th class="text-left">Max. Gross</th>
                            <th class="text-left">Tare</th>
                            <th class="text-left">Max. Payload</th>
                            <th class="text-left">Capacity to load line</th>
                        </tr>
                        <tr v-for="item in specs" :key="item.name">
                            <td>{{ item.type }}</td>
                            <td>{{ item.size }}</td>
                            <td>{{ item.width1 }}</td>
                            <td>{{ item.height }}</td>
                            <td>{{ item.length }}</td>
                            <td>{{ item.width2 }}</td>
                            <td>{{ item.htll }}</td>
                            <td>{{ item.maxGross }}</td>
                            <td>{{ item.tare }}</td>
                            <td>{{ item.maxPayload }}</td>
                            <td>{{ item.ctll }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </div>
        <div class="right">
            <Contact/>
        </div>
    </div>
</template>

<script>
    import Contact from "../utils/Contact";
    export default {
        name: "Specification",
        components: {Contact},
        data: () => ({
            specs: [
                {
                    type: '20″',
                    size: '20′ x 8′ x 8′ 6″',
                    width1: '2,340',
                    height: '2,274',
                    length: '5,896',
                    width2: '2,350',
                    htll: '2,385',
                    maxGross: '27,000',
                    tare: '2,150',
                    maxPayload: '24,850',
                    ctll: '\t33.2',
                },
                {
                    type: '20″',
                    size: '20′ x 8′ x 8′ 6″',
                    width1: '2,340',
                    height: '2,274',
                    length: '5,896',
                    width2: '2,350',
                    htll: '2,385',
                    maxGross: '27,000',
                    tare: '2,150',
                    maxPayload: '24,850',
                    ctll: '\t33.2',
                },
                {
                    type: '20″',
                    size: '20′ x 8′ x 8′ 6″',
                    width1: '2,340',
                    height: '2,274',
                    length: '5,896',
                    width2: '2,350',
                    htll: '2,385',
                    maxGross: '27,000',
                    tare: '2,150',
                    maxPayload: '24,850',
                    ctll: '\t33.2',
                },
                {
                    type: '20″',
                    size: '20′ x 8′ x 8′ 6″',
                    width1: '2,340',
                    height: '2,274',
                    length: '5,896',
                    width2: '2,350',
                    htll: '2,385',
                    maxGross: '27,000',
                    tare: '2,150',
                    maxPayload: '24,850',
                    ctll: '\t33.2',
                },
                {
                    type: '20″',
                    size: '20′ x 8′ x 8′ 6″',
                    width1: '2,340',
                    height: '2,274',
                    length: '5,896',
                    width2: '2,350',
                    htll: '2,385',
                    maxGross: '27,000',
                    tare: '2,150',
                    maxPayload: '24,850',
                    ctll: '\t33.2',
                },
            ]
        })
    }
</script>

<style scoped>
    .spe--title{
        font-size: 1.6em;
        margin: 0.67em 0;
        color: #ed120b;
        font-weight: bold;
    }
    .specification{
        display: grid;
        grid-template-columns: 8fr 3fr;
        grid-gap: 1rem;
    }
    .left, .right, .table{
        width: 100%;
    }
    @media screen and (max-width: 1288px) {

        .specification{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1rem;
        }
    }
</style>