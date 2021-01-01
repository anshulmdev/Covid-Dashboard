<template>
<div>
    <card>
        <div class="card-header mb-5">
            <h3 class="card-title">Polynomial Regression considering categories</h3>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <card type="chart">
                    <template slot="header">
                        <h5 class="card-category">Total Cases </h5>
                        <h3 class="card-title">Weekday wise
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
                        <h5 class="card-category">Total Cases</h5>
                        <h3 class="card-title">
                            State wise
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
                        <h5 class="card-category">Total Testing</h5>
                        <h3 class="card-title">
                            Weekday wise
                        </h3>
                    </template>
                    <div class="chart-area">
                        <pie-chart style="height: 100%" :chart-data="PieChart3.chartData" :gradient-stops="PieChart3.gradientStops" :extra-options="PieChart3.extraOptions">
                        </pie-chart>
                    </div>
                </card>
            </div>
        </div>
        <div class="card-header mb-5">
            <h3 class="card-title">Daily confirmed cases: <span v-html="dateToday"></span></h3>
        </div>
        <div class="chart-area">
            <line-chart style="height: 100%" :chart-data="greenLineChart.chartData" :gradient-stops="greenLineChart.gradientStops" :extra-options="greenLineChart.extraOptions">
            </line-chart>
        </div><br>
        <center>
            <div slot="footer" class="button-container">
                <base-button type="primary" class="btn-fill" @click="predict()">
                    Run Prediction Algorithm
                </base-button>
            </div>
        </center>
    </card>
    <card v-if="dateToday">
        <div class="card-header mb-5">
            <h3 class="card-title">Polynomial Regression API Details</h3>
        </div>
        <p> Formulae: <span v-html="dateToday"></span></p><br>
        <p> R-squared: r2=0.87</p><br>
        <p> Adjusted R-squared: r2 adj = 0.87</p><br>
        <p> Regression Polynomial: CASES = − 0.02(DAYS<sup>3</sup>) + 9.78(DAYS<sup>2</sup>) − 1026.33(DAYS) + 13971.08</p><br>
    </card>
</div>
</template>

<script>
import axios from 'axios'
import config from '@/config';
import LineChart from '@/components/Charts/LineChart';
import * as chartConfigs from '@/components/Charts/config';
import PieChart from '@/components/Charts/PieChart';

export default {
    name: 'dashboard',
    components: {
        LineChart,
        PieChart
    },
    data() {
        return {
            data:0,
            database: {
                label: [],
                cases: [],
                totalCases: 0
            },
            dateToday: null,
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
            },
            greenLineChart: {
                extraOptions: chartConfigs.greenChartOptions,
                chartData: {
                    labels: [],
                    datasets: [{
                        label: 'New Confirmed Cases',
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
            }
        };
    },
    methods: {
        async predict() {
            if(!this.dateToday){
            const days = this.data
            const labels = []
            const cases = []
            for (let i=days; i<days+7; i++){
                let casesCal = parseInt((-0.02*(i**3)) + (9.78*(i**2)) + (-1015*(i)) + (13971.08))
                this.database.cases.push(casesCal)
                this.database.label.push(i+ ' Days')

            }
            this.greenLineChart.chartData = {
                labels: this.database.label,
                datasets: [{
                    label: 'New Confirmed Cases',
                    fill: true,
                    borderColor: config.colors.orange,
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: config.colors.orange,
                    pointBorderColor: config.colors.orange,
                    pointHoverBackgroundColor: config.colors.orange,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: this.database.cases
                }]
            }
            const today = new Date()
            this.dateToday = `y = β<sub>0</sub>+β<sub>1</sub>x+β<sub>2</sub>x<sup>2</sup>+β<sub>3</sub>x<sup>3</sup>`}
        },
        async run() {
            const database = await axios({
                url: "https://api.covid19india.org/data.json",
                method: 'get'
            })
            //
            this.data = Object.values(database.data)[0].length
            const stateName = []
            const totalLabel = []
            const totalCases = []
            const stateCases = []
            const totalTesting = []
            const totalCasesWeek = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }
            const totalTestingWeek = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }
            for (let i = 0; i < Object.values(database.data)[0].length; i++) {
                totalCasesWeek[(new Date(Object.values(database.data)[0][i].dateymd)).getDay()] += parseInt(Object.values(database.data)[0][i].dailyconfirmed)
            }
            for (let i = 0; i < Object.values(database.data)[2].length; i++) {
                if ((new Date(Object.values(database.data)[2][i].updatetimestamp)).getDay()) {
                    totalTestingWeek[(new Date(Object.values(database.data)[2][i].updatetimestamp)).getDay()] += parseInt(Object.values(database.data)[2][i].totalsamplestested)
                }
            }
            for (let i = 1; i < Object.values(database.data)[1].length; i++) {
                stateName.push(Object.values(database.data)[1][i].state)
                stateCases.push(parseInt(Object.values(database.data)[1][i].confirmed))
            }
            const lengthD = database.data.cases_time_series.length
            for (let i = 0; i < lengthD; i += 8) {
                this.database.cases.push(parseInt(Object.values(database.data)[0][i].dailyconfirmed))
                this.database.label.push(i+" Days")
            }
            this.database.totalCases = parseInt(Object.values(database.data)[0][Object.values(database.data)[0].length - 1].totalconfirmed)
            //
            this.PieChart1.chartData = {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: ["#344675", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "rgba(76, 211, 150, 0.1)"],
                        borderColor: ["#344675", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "rgba(76, 211, 150, 0.1)"],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(totalCasesWeek)
                    }]
                },
                this.PieChart2.chartData = {
                    labels: stateName,
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: ["#344675", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "rgba(76, 211, 150, 0.1)", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4"],
                        borderColor: ["#344675", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "rgba(76, 211, 150, 0.1)", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4", "#42b883", "#1d8cf8", "#fd5d93", "#ff8a76", "#00d6b4"],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: stateCases
                    }]
                },
                this.PieChart3.chartData = {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [{
                        label: 'Countries',
                        fill: true,
                        backgroundColor: ["#fd5d93", "#ff8a76", "#00d6b4", "#344675", "#42b883", "#1d8cf8", "rgba(76, 211, 150, 0.1)"],
                        borderColor: ["#fd5d93", "#ff8a76", "#00d6b4", "#344675", "#42b883", "#1d8cf8", "rgba(76, 211, 150, 0.1)"],
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: Object.values(totalTestingWeek)
                    }]
                }
            this.greenLineChart.chartData = {
                labels: this.database.label,
                bezierCurve: false,
                datasets: [{
                    label: 'New Confirmed Cases',
                    fill: true,
                    borderColor: config.colors.teal,
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: config.colors.teal,
                    pointBorderColor: config.colors.teal,
                    pointHoverBackgroundColor: config.colors.teal,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: this.database.cases
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
