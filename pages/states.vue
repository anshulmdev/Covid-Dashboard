<template>
<div>
    <card>
        <div class="card-header mb-5">
            <h3 class="card-title">Top1,Top 5,Top 10 States Vs Rest Of India (RoI)</h3>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <card type="chart">
                    <template slot="header">
                        <h5 class="card-category">Maharashtra vs </h5>
                        <h3 class="card-title">Rest of India
                        </h3>
                    </template>
                    <div class="chart-area">
                        <pie-chart style="height: 100%" :chart-data="PieChart1.chartData" :gradient-stops="PieChart1.gradientStops" :extra-options="PieChart1.extraOptions">
                        </pie-chart>
                    </div>
                </card>
            </div>
            <div class="col-lg-4">
                <card type="chart">
                    <template slot="header">
                        <h5 class="card-category">Top 5 States vs</h5>
                        <h3 class="card-title">
                            Rest of India
                        </h3>
                    </template>
                    <div class="chart-area">
                        <pie-chart style="height: 100%" :chart-data="PieChart2.chartData" :gradient-stops="PieChart2.gradientStops" :extra-options="PieChart2.extraOptions">
                        </pie-chart>
                    </div>
                </card>
            </div>
            <div class="col-lg-4">
                <card type="chart">
                    <template slot="header">
                        <h5 class="card-category">Top 10 States vs</h5>
                        <h3 class="card-title">
                            Rest of India
                        </h3>
                    </template>
                    <div class="chart-area">
                        <pie-chart style="height: 100%" :chart-data="PieChart3.chartData" :gradient-stops="PieChart3.gradientStops" :extra-options="PieChart3.extraOptions">
                        </pie-chart>
                    </div>
                </card>
            </div>
        </div>
    </card>

    <div>
        <card card-body-classes="table-full-width">
            <h4 slot="header" class="card-title">Statewise tabular data</h4>
            <el-table :data="tableData">
                <el-table-column min-width="150" sortable label="State" property="state"></el-table-column>
                <el-table-column min-width="150" sortable label="Active" property="active"></el-table-column>
                <el-table-column min-width="150" sortable label="Confirmed" property="confirmed"></el-table-column>
                <el-table-column min-width="150" sortable label="Deaths" property="death"></el-table-column>
                <el-table-column min-width="150" sortable label="Recovered" property="recovered"></el-table-column>
                <el-table-column min-width="150" sortable label="Last updated on" property="update"></el-table-column>
            </el-table>
        </card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import config from '@/config';
import * as chartConfigs from '@/components/Charts/config';
import PieChart from '@/components/Charts/PieChart';
import {
    Table,
    TableColumn
} from 'element-ui';

export default {
    name: 'dashboard',
    components: {
        PieChart,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data() {
        return {
            tableData: [],
            PieChart1: {
                extraOptions: chartConfigs.PieChartOptions,
                chartData: {
                    labels: ['Maharashtra', 'Rest of India'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        borderColor: config.colors.info,
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45]
                    }]
                },
                gradientColors: [
                    'rgba(66,134,121,0.15)',
                    'rgba(66,134,121,0.0)',
                    'rgba(66,134,121,0)'
                ],
                gradientStops: [1, 0.4, 0]
            },
            PieChart2: {
                extraOptions: chartConfigs.PieChartOptions,
                chartData: {
                    labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        borderColor: config.colors.primary,
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45]
                    }]
                },
                gradientColors: [
                    'rgba(66,134,121,0.15)',
                    'rgba(66,134,121,0.0)',
                    'rgba(66,134,121,0)'
                ],
                gradientStops: [1, 0.4, 0]
            },
            PieChart3: {
                extraOptions: chartConfigs.PieChartOptions,
                chartData: {
                    labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        borderColor: config.colors.danger,
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45]
                    }]
                },
                gradientColors: [
                    'rgba(66,134,121,0.15)',
                    'rgba(66,134,121,0.0)',
                    'rgba(66,134,121,0)'
                ],
                gradientStops: [1, 0.4, 0]
            }
        };
    },
    methods: {
        async run() {
            const database = await axios({
                url: "https://api.covid19india.org/data.json",
                method: 'get'
            })
            const stateData = []
            const mvsr = []
            let top5roi = 0
            let top10roi = 0
            const totalCases = parseInt((Object.values(database.data)[0][database.data.cases_time_series.length - 1].totalconfirmed))
            for (let i = 1; i < Object.values(database.data)[1].length; i++) {
                if (Object.values(database.data)[1][i].state == 'Maharashtra') {
                    mvsr.push(totalCases - parseInt(Object.values(database.data)[1][i].confirmed))
                    mvsr.push(parseInt(Object.values(database.data)[1][i].confirmed))
                }
                if (i < 5) {
                    top5roi += parseInt(Object.values(database.data)[1][i].confirmed)
                }
                if (i > 4 && i < 10) {
                    top10roi += parseInt(Object.values(database.data)[1][i].confirmed)

                }
                stateData.push({
                    state: Object.values(database.data)[1][i].state,
                    active: parseInt(Object.values(database.data)[1][i].active),
                    confirmed: parseInt(Object.values(database.data)[1][i].confirmed),
                    death: parseInt(Object.values(database.data)[1][i].deaths),
                    recovered: parseInt(Object.values(database.data)[1][i].recovered),
                    update: Object.values(database.data)[1][i].lastupdatedtime
                })
            }
            this.tableData = stateData
            this.PieChart1.chartData = {
                    labels: ['Rest of India', 'Maharashtra'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: [config.colors.info, config.colors.teal],
                        borderColor: [config.colors.info, config.colors.teal],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: mvsr
                    }]
                },
                this.PieChart2.chartData = {
                    labels: ['Rest of India', 'Top 5 States'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: [config.colors.info, config.colors.teal],
                        borderColor: [config.colors.info, config.colors.teal],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [totalCases - top5roi, top5roi]
                    }]
                },
                this.PieChart3.chartData = {
                    labels: ['Rest of India', 'Top 10 States'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: [config.colors.info, config.colors.teal],
                        borderColor: [config.colors.info, config.colors.teal],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [totalCases - (top5roi + top10roi), top5roi + top10roi]
                    }]
                }
        },
    },
    created() {
        this.run()
    }
}
</script>

<style></style>
