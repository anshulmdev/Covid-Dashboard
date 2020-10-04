<template>
<div>
    <card>
        <div class="card-header mb-5">
            <h1 class="card-title">Lockdown Analysis</h1>
            <h5 class="card-category">On 24 March 2020, the Government of India under Prime Minister Narendra Modi ordered a nationwide lockdown for 21 days, limiting movement of the entire 1.3 billion population of India as a preventive measure against the COVID-19 pandemic in India.It was ordered after a 14-hour voluntary public curfew on 22 March, followed by enforcement of a series of regulations in the country's COVID-19 affected regions. The lockdown was placed when the number of confirmed positive coronavirus cases in India was approximately 500</h5>
        </div>
        <div class="row">

            <div class="col-lg-6">
                <card>
                    <h4 slot="header" class="card-title">Lockdown Phases</h4>
                    <card>
                        <p class="text-success">
                            Phase 1: Lockdown 1.0 - 25 March 2020 – 14 April 2020 (21 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-primary">
                            Phase 2: Lockdown 2.0 - 15 April 2020 – 3 May 2020 (19 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-info">
                            Phase 3: Lockdown 3.0 - 4 May 2020 – 17 May 2020 (14 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-muted">
                            Phase 4: Lockdown 4.0 - 18 May 2020 – 31 May 2020 (14 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-success">
                            Phase 5: Unlock 1.0 - 1 June 2020 – 30 June 2020 (30 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-warning">
                            Phase 6: Unlock 2.0 - 1 July 2020 – 31 July 2020 (31 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-info">
                            Phase 7: Unlock 3.0 - 1 Aug 2020 – 31 Aug 2020 (31 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-danger">
                            Phase 8: Unlock 4.0 - 1 Sep 2020 – 30 Sep 2020 (30 days)
                        </p>
                    </card>
                    <card>
                        <p class="text-muted">
                            Phase 9: Unlock 5.0 - 1 Oct 2020 – 30 Oct 2020 (30 days)
                        </p>
                    </card>
                </card>
            </div>

            <div class="col-lg-6">

                <card type="chart">
                    <template slot="header">
                        <h5 class="card-category">Doubling time is time it takes for a desease to double in current size/value</h5>
                        <h3 class="card-title">
                            <i class="tim-icons icon-send text-success "></i>Doubling Days
                        </h3>
                    </template>
                    <div class="chart-area">
                        <line-chart style="height: 100%" :chart-data="greenLineChart.chartData" :gradient-stops="greenLineChart.gradientStops" :extra-options="greenLineChart.extraOptions">
                        </line-chart>
                    </div>
                </card>
                <card>
                    <h4 slot="header" class="card-title">Insights</h4>
                    <h3 class="card-category">Good</h3>
                    <ul>
                        <li>
                            Testing - Increase in Number of tests and thereby increasing Tests/Million</li>
                        <li>
                            Steady Increase in Recovery rate</li>
                        <li>
                            Decrease in Death rate</li>
                        <li>
                            Growth factor in declining trend</li>
                    </ul>
                    <h3 class="card-category">Bad</h3>
                    <ul>
                        <li>
                            Increase in number of confirmed cases which can overwhelme healthcare infrastucture</li>
                        <li>
                            Deaths</li>
                        <li>
                            Doubling rate is continuously increasing since March 1,2020</li>
                    </ul>
                </card>
            </div>
            <div class="col-lg-12">
                <card card-body-classes="table-full-width">
                    <h4 slot="header" class="card-title">Absolute Comparison</h4>
                    <h4 class="card-category">
                        The table below lists out the Confirmedcases, Recovered, Deceased and Totaltests across all lockdowns<br>
                        Description :<br></h4>
                    <h5 class="card-category">
                        <ul>
                            <li>
                                ConfimedCases - Number of confirmed cases in the particular lockdown</li>
                            <li>
                                Recovered - Number of people recovered in the particular lockdown</li>
                            <li>
                                Deceased - Number of people dead in the particular lockdown</li>
                            <li>
                                TotalTests - Number of Tests conducted in the particular lockdown</li>
                        </ul>
                    </h5>
                    <h4 class="card-category">
                        All the values are calculated by finding the differnce between start date and end date of lockdown
                    </h4><br>
                    <el-table :data="tableDataLockdown1">
                        <el-table-column min-width="150" sortable label="Version" property="version"></el-table-column>
                        <el-table-column min-width="150" sortable label="No. of Days" property="days"></el-table-column>
                        <el-table-column min-width="150" sortable label="Confirmed" property="confirmed"></el-table-column>
                        <el-table-column min-width="150" sortable label="Recovered" property="recovered"></el-table-column>
                        <el-table-column min-width="150" sortable label="Deaths" property="deceased"></el-table-column>
                        <el-table-column min-width="150" sortable label="Total" property="total"></el-table-column>
                    </el-table>
                </card>
                <card card-body-classes="table-full-width">
                    <h3 class="card-category">
                        Since the number of days in lockdowns are not consistant hence lets calculate on per day basis</h3><br>
                    <el-table :data="tableDataLockdown2">
                        <el-table-column min-width="150" sortable label="Version" property="version"></el-table-column>
                        <el-table-column min-width="150" sortable label="No. of Days" property="days"></el-table-column>
                        <el-table-column min-width="150" sortable label="Confirmed/Day" property="confirmed"></el-table-column>
                        <el-table-column min-width="150" sortable label="Recovered/Day" property="recovered"></el-table-column>
                        <el-table-column min-width="150" sortable label="Deaths/Day" property="deceased"></el-table-column>
                        <el-table-column min-width="150" sortable label="Tests/Day" property="total"></el-table-column>
                    </el-table>
                </card>
                <card card-body-classes="table-full-width">
                    <h4 slot="header" class="card-title">Percentage Comparison</h4>
                    <h4 class="card-category">
                        The table below lists out the Tests/Million,Growthfactor,RecoveryRate,DeathRate and TestPositivityRate across all lockdowns<br>
                        Description :<br></h4>
                    <h5 class="card-category">
                        <ul>
                            <li>
                                Tests/Million - Number of tests performed on a million population</li>
                            <li>
                            <li>
                                Growthfactor - Average growth of confirmeed cases on a day by day basis</li>
                            <li>
                                RecoveryRate - Number of people recovered on Number of people with covid</li>
                            <li>
                                DeathRate - Number of people dead on Number of people with covid</li>
                            <li>
                                TestPositivityRate - Number of tests positive on total number of tests</li>
                        </ul>
                    </h5>
                    <h4 class="card-category">
                        All the values are calculated by finding the differnce between start date and end date of lockdown
                    </h4><br>
                    <el-table :data="tableDataLockdown3">
                        <el-table-column min-width="150" sortable label="Version" property="version"></el-table-column>
                        <el-table-column min-width="150" sortable label="Tests/Million" property="days"></el-table-column>
                        <el-table-column min-width="150" sortable label="Growth Factor" property="confirmed"></el-table-column>
                        <el-table-column min-width="150" sortable label="Recovery Rate" property="recovered"></el-table-column>
                        <el-table-column min-width="150" sortable label="Death Rate" property="deceased"></el-table-column>
                        <el-table-column min-width="150" sortable label="Test Positivity Rate" property="total"></el-table-column>
                    </el-table>
                </card>
            </div>
        </div>
    </card>
</div>
</template>

<script>
import axios from 'axios'
import {
    BaseAlert
} from '@/components';
import config from '@/config';
import * as chartConfigs from '@/components/Charts/config';
import LineChart from '@/components/Charts/LineChart';
import {
    Table,
    TableColumn
} from 'element-ui';

export default {
    name: 'dashboard',
    components: {
        BaseAlert,
        LineChart,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data() {
        return {
            tableDataLockdown1: [{
                    "version": "Lockdown 1",
                    "days": "21",
                    "confirmed": "10914",
                    "recovered": "1325",
                    "deceased": "386",
                    "total": "219749",
                },
                {
                    "version": "Lockdown 2",
                    "days": "19",
                    "confirmed": "31293",
                    "recovered": "10398",
                    "deceased": "1067",
                    "total": "771851",
                },
                {
                    "version": "Lockdown 3",
                    "days": "14",
                    "confirmed": "52920",
                    "recovered": "25031",
                    "deceased": "1561",
                    "total": "1120409",
                },
                {
                    "version": "Lockdown 4",
                    "days": "14",
                    "confirmed": "94951",
                    "recovered": "55067",
                    "deceased": "2382",
                    "total": "1509385",
                },
                {
                    "version": "Unlock 1",
                    "days": "30",
                    "confirmed": "395146",
                    "recovered": "1111273",
                    "deceased": "747698",
                    "total": "4771447",
                },
                {
                    "version": "Unlock 2",
                    "days": "31",
                    "confirmed": "1111273",
                    "recovered": "747698",
                    "deceased": "19155",
                    "total": "10006385",
                },
                {
                    "version": "Unlock 3",
                    "days": "31",
                    "confirmed": "1990885",
                    "recovered": "1741832",
                    "deceased": "28879",
                    "total": "22949255",
                },
                {
                    "version": "Unlock 4",
                    "days": "30",
                    "confirmed": "161028",
                    "recovered": "130019",
                    "deceased": "2053",
                    "total": "1012367",
                }
            ],
            tableDataLockdown2: [{
                    "version": "Lockdown 1",
                    "days": "21",
                    "confirmed": "520",
                    "recovered": "63",
                    "deceased": "18",
                    "total": "10464",
                },
                {
                    "version": "Lockdown 2",
                    "days": "19",
                    "confirmed": "1647",
                    "recovered": "547",
                    "deceased": "56",
                    "total": "40624",
                },
                {
                    "version": "Lockdown 3",
                    "days": "14",
                    "confirmed": "3780",
                    "recovered": "1788",
                    "deceased": "112",
                    "total": "80029",
                },
                {
                    "version": "Lockdown 4",
                    "days": "14",
                    "confirmed": "6782",
                    "recovered": "3933",
                    "deceased": "170",
                    "total": "107813",
                },
                {
                    "version": "Unlock 1",
                    "days": "30",
                    "confirmed": "13172",
                    "recovered": "8533",
                    "deceased": "400",
                    "total": "159048",
                },
                {
                    "version": "Unlock 2",
                    "days": "31",
                    "confirmed": "35848",
                    "recovered": "24119",
                    "deceased": "618",
                    "total": "322787",
                },
                {
                    "version": "Unlock 3",
                    "days": "31",
                    "confirmed": "64222",
                    "recovered": "56188",
                    "deceased": "932",
                    "total": "740299",
                },
                {
                    "version": "Unlock 4",
                    "days": "30",
                    "confirmed": "5368",
                    "recovered": "4334",
                    "deceased": "68",
                    "total": "33746",
                }
            ],
            tableDataLockdown3: [{
                    "version": "Lockdown 1",
                    "days": "160",
                    "confirmed": "1.17",
                    "recovered": "12.14",
                    "deceased": "3.54",
                    "total": "4.97",
                },
                {
                    "version": "Lockdown 2",
                    "days": "561",
                    "confirmed": "1.08",
                    "recovered": "33.23",
                    "deceased": "3.41",
                    "total": "4.05",
                },
                {
                    "version": "Lockdown 3",
                    "days": "814",
                    "confirmed": "1.05",
                    "recovered": "47.3",
                    "deceased": "2.95",
                    "total": "4.72",
                },
                {
                    "version": "Lockdown 4",
                    "days": "1097",
                    "confirmed": "1.05",
                    "recovered": "58",
                    "deceased": "2.51",
                    "total": "6.29",
                },
                {
                    "version": "Unlock 1",
                    "days": "3468",
                    "confirmed": "1.03",
                    "recovered": "64.78",
                    "deceased": "3.04",
                    "total": "8.28",
                },
                {
                    "version": "Unlock 2",
                    "days": "7272",
                    "confirmed": "1.04",
                    "recovered": "67.28",
                    "deceased": "1.72",
                    "total": "11.11",
                },
                {
                    "version": "Unlock 3",
                    "days": "16678",
                    "confirmed": "1.01",
                    "recovered": "87.49",
                    "deceased": "1.45",
                    "total": "8.68",
                },
                {
                    "version": "Unlock 4",
                    "days": "736",
                    "confirmed": "1.1",
                    "recovered": "80.74",
                    "deceased": "1.27",
                    "total": "15.91",
                }
            ],
            greenLineChart: {
                extraOptions: chartConfigs.greenChartOptions,
                chartData: {
                    labels: ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
                    datasets: [{
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
                        data: [0, 5, 10]
                    }]
                },
                gradientColors: [
                    'rgba(66,134,121,0.15)',
                    'rgba(66,134,121,0.0)',
                    'rgba(66,134,121,0)'
                ],
                gradientStops: [1, 0.4, 0]
            },
        };
    },
    methods: {
        async run() {
            const database = await axios({
                url: "https://api.covid19india.org/data.json",
                method: 'get'
            })
            const dd = []
            const nn = []
            const lengthD = database.data.cases_time_series.length
            const totalCases = parseInt((Object.values(database.data)[0][database.data.cases_time_series.length - 1].totalconfirmed))
            for (let i = 45; i < lengthD; i += 7) {
                const total = parseInt(Object.values(database.data)[0][i].totalconfirmed)
                const last = parseInt(Object.values(database.data)[0][i - 1].totalconfirmed)
                dd.push(parseInt(5 * (Math.log(2) / (Math.log(total / last)))))
                nn.push(Object.values(database.data)[0][i].date.slice(0, 6))
            }
            console.log(dd, nn)
            this.greenLineChart.chartData = {
                labels: nn,
                datasets: [{
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
                    data: dd
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
