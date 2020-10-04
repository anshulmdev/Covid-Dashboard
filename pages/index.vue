<template>
<div class="row">
    <!-- Big Chart -->
    <div class="col-12">
        <card type="chart">
            <template slot="header">
                <div class="row">
                    <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                        <h5 class="card-category">Timeline of Covid-19 in India</h5>
                        <h3 class="card-title">
                            <i class="tim-icons icon-bell-55 text-primary "></i> {{totalCases}} Lakhs
                        </h3>
                    </div>
                    <div class="col-sm-6 d-flex d-sm-block">
                        <div class="btn-group btn-group-toggle" :class="isRTL ? 'float-left' : 'float-right'" data-toggle="buttons">
                            <label v-for="(option, index) in bigLineChartCategories" :key="option.name" class="btn btn-sm btn-primary btn-simple" :class="{ active: bigLineChart.activeIndex === index }" :id="index">
                                <input type="radio" @click="initBigChart(index)" name="options" autocomplete="off" :checked="bigLineChart.activeIndex === index" />
                                <span class="d-none d-sm-block">{{ option.name }}</span>
                                <span class="d-block d-sm-none">
                                    <i :class="option.icon"></i>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </template>
            <div class="chart-area">
                <bar-chart style="height: 100%" ref="bigChart" :chart-data="bigLineChart.chartData" :gradient-colors="blueBarChart.gradientColors" :gradient-stops="blueBarChart.gradientStops" :extra-options="blueBarChart.extraOptions">
                </bar-chart>
            </div>
        </card>
    </div>

    <!-- Small charts -->
    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card>
            <h4 slot="header" class="card-title">General Statistics</h4>

            <base-alert type="info"> Date of First Covid-19 Case:&nbsp; 30 Jan 2020</base-alert>
            <base-alert type="info"> Number of days since first case:&nbsp; {{database.numberOfDays}} days</base-alert>
            <base-alert type="info"> National recovery rate:&nbsp; {{database.recoveryRate}} %</base-alert>
        </card>
    </div>
    <div class="col-lg-8" :class="{ 'text-right': isRTL }">
        <card type="chart">
            <template slot="header">
                <h5 class="card-category">Top 10 States (Recovery: in thousands)</h5>
            </template>
            <div class="chart-area">
                <line-chart style="height: 100%" :chart-data="greenLineChart.chartData" :gradient-stops="greenLineChart.gradientStops" :extra-options="greenLineChart.extraOptions">
                </line-chart>
            </div>
        </card>
    </div>
    <!-- Small charts -->

    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
            <template slot="header">
                <h5 class="card-category">Total Cases</h5>
                <h3 class="card-title">
                    <i class="tim-icons icon-bell-55 text-primary "></i> {{totalCases}}
                </h3>
            </template>
            <div class="chart-area">
                <line-chart style="height: 100%" :chart-data="purpleLineChart.chartData" :gradient-colors="purpleLineChart.gradientColors" :gradient-stops="purpleLineChart.gradientStops" :extra-options="purpleLineChart.extraOptions">
                </line-chart>
            </div>
        </card>
    </div>

    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
            <template slot="header">
                <h5 class="card-category">Daily Sales</h5>
                <h3 class="card-title">
                    <i class="tim-icons icon-delivery-fast text-info "></i> 3,500€
                </h3>
            </template>
            <div class="chart-area">
                <bar-chart style="height: 100%" :chart-data="blueBarChart.chartData" :gradient-stops="blueBarChart.gradientStops" :extra-options="blueBarChart.extraOptions">
                </bar-chart>
            </div>
        </card>
    </div>
    <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
            <template slot="header">
                <h5 class="card-category">Completed tasks</h5>
                <h3 class="card-title">
                    <i class="tim-icons icon-send text-success "></i> 12,100K
                </h3>
            </template>
            <div class="chart-area">
                <line-chart style="height: 100%" :chart-data="greenLineChart.chartData" :gradient-stops="greenLineChart.gradientStops" :extra-options="greenLineChart.extraOptions">
                </line-chart>
            </div>
        </card>
    </div>
    <div>
        <card type="tasks" :header-classes="{ 'text-right': isRTL }">
            <template slot="header" class="d-inline">
                <h6 class="title d-inline">Tasks (5)</h6>
                <p class="card-category d-inline">Today</p>

                <base-dropdown menu-on-right="" tag="div" title-classes="btn btn-link btn-icon" class="float-right">
                    <i slot="title" class="tim-icons icon-settings-gear-63"></i>
                    <a class="dropdown-item" href="#pablo"> Action </a>
                    <a class="dropdown-item" href="#pablo"> Another action </a>
                    <a class="dropdown-item" href="#pablo"> Something else </a>
                </base-dropdown>
            </template>
            <div class="table-full-width table-responsive">
                <task-list></task-list>
            </div>
        </card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {
    BaseAlert
} from '@/components';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from '@/components/Dashboard/TaskList';
import config from '@/config';
import {
    Table,
    TableColumn
} from 'element-ui';

let bigChartData = []
let bigChartLabels = []
let bigChartDatasetOptions = {
    fill: true,
    borderColor: config.colors.primary,
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: config.colors.primary,
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: config.colors.primary,
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
}

export default {
    name: 'dashboard',
    components: {
        BaseAlert,
        LineChart,
        BarChart,
        TaskList,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data() {
        return {
            totalCases: 0,
            database: {
                numberOfDays: 0,
                recovered: [],
                names: [],
                recoveryRate: 0
            },
            bigLineChart: {
                activeIndex: 0,
                chartData: {
                    datasets: [{
                        ...bigChartDatasetOptions,
                        data: bigChartData[0]
                    }],
                    labels: bigChartLabels
                },
                extraOptions: chartConfigs.purpleChartOptions,
                gradientColors: config.colors.primaryGradient,
                gradientStops: [1, 0.4, 0],
                categories: []
            },
            purpleLineChart: {
                extraOptions: chartConfigs.purpleChartOptions,
                chartData: {
                    labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [{
                        label: 'Data',
                        fill: true,
                        borderColor: config.colors.primary,
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: config.colors.primary,
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: config.colors.primary,
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 100, 70, 80, 120, 80]
                    }]
                },
                gradientColors: config.colors.primaryGradient,
                gradientStops: [1, 0.2, 0]
            },
            greenLineChart: {
                extraOptions: chartConfigs.greenChartOptions,
                chartData: {
                    labels: [],
                    datasets: [{
                        label: 'My First dataset',
                        fill: true,
                        borderColor: config.colors.danger,
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: config.colors.danger,
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: config.colors.danger,
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: []
                    }]
                },
                gradientColors: [
                    'rgba(66,134,121,0.15)',
                    'rgba(66,134,121,0.0)',
                    'rgba(66,134,121,0)'
                ],
                gradientStops: [1, 0.4, 0]
            },
            blueBarChart: {
                extraOptions: chartConfigs.barChartOptions,
                chartData: {
                    labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
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
                gradientColors: config.colors.primaryGradient,
                gradientStops: [1, 0.4, 0]
            }
        };
    },
    computed: {
        enableRTL() {
            return this.$route.query.enableRTL;
        },
        isRTL() {
            return this.$rtl.isRTL;
        },
        bigLineChartCategories() {
            return [{
                name: 'Confirmed',
                icon: 'tim-icons icon-single-02'
            }, {
                name: 'Recovered',
                icon: 'tim-icons icon-gift-2'
            }, {
                name: 'Deceased',
                icon: 'tim-icons icon-tap-02'
            }];
        }
    },
    methods: {
        async run() {
            const database = await axios({
                url: "https://api.covid19india.org/data.json",
                method: 'get'
            })
            const database2 = []
            const database3 = []
            const database4 = []
            const database5 = []
            const lengthD = database.data.cases_time_series.length
            this.database.numberOfDays = lengthD - 1
            for (let i = 0; i < lengthD; i += 15) {
                database2.push(parseInt(Object.values(database.data)[0][i].totalconfirmed))
                database3.push(parseInt(Object.values(database.data)[0][i].totalrecovered))
                database4.push(parseInt(Object.values(database.data)[0][i].totaldeceased))
                database5.push(Object.values(database.data)[0][i].date.slice(0, 6))
            }
            database2.push(parseInt(Object.values(database.data)[0][lengthD - 1].totalconfirmed))
            database3.push(parseInt(Object.values(database.data)[0][lengthD - 1].totalrecovered))
            database4.push(parseInt(Object.values(database.data)[0][lengthD - 1].totaldeceased))
            database5.push(Object.values(database.data)[0][lengthD - 1].date.slice(0, 6))
            bigChartLabels = database5
            bigChartData = [database2, database3, database4]
            for (let i = 1; i < 11; i++) {
                this.database.recovered.push(parseInt(parseInt(Object.values(database.data)[1][i].recovered) / 1000))
                this.database.names.push(Object.values(database.data)[1][i].statecode)
            }
            this.database.recoveryRate = parseInt(parseInt((Object.values(database.data)[0][database.data.cases_time_series.length - 1].totalrecovered) * 100) / (Object.values(database.data)[0][database.data.cases_time_series.length - 1].totalconfirmed))
            this.initBigChart(0)
            this.greenLineChart.chartData = {
                labels: this.database.names.reverse(),
                datasets: [{
                    label: 'My First dataset',
                    fill: true,
                    borderColor: config.colors.info,
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: config.colors.info,
                    pointBorderColor: config.colors.info,
                    pointHoverBackgroundColor: config.colors.info,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: this.database.recovered.reverse()
                }]
            }
        },
        initBigChart(index) {
            let chartData = {
                datasets: [{
                    ...bigChartDatasetOptions,
                    data: bigChartData[index]
                }],
                labels: bigChartLabels
            };
            this.$refs.bigChart.updateGradients(chartData);
            this.bigLineChart.chartData = chartData;
            this.bigLineChart.activeIndex = index;
            if (bigChartData[index]) {
                this.totalCases = parseInt(bigChartData[index][bigChartData[index].length - 1] / 100000)
            }
        }
    },
    created() {
        this.run()
    }
}
</script>

<style></style>
