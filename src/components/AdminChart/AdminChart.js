import * as React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    AreaSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const data = [
    { year: '2018', chrome: 67225, safari: 46598 },
    { year: '2019', chrome: 179873, safari: 90560 },
    { year: '2020', chrome: 310088, safari: 118848 },
    { year: '2021', chrome: 539318, safari: 189924 },
];

const chartRootStyles = {
    chart: {
        paddingRight: '20px',
    },
};
const legendStyles = {
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
};
const legendLabelStyles = theme => ({
    label: {
        paddingTop: theme.spacing(1),
    },
});
const legendItemStyles = {
    item: {
        flexDirection: 'column',
    },
};

const ChartRootBase = ({ classes, ...restProps }) => (
    <Chart.Root {...restProps} className={classes.chart} />
);
const LegendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item {...restProps} className={classes.item} />
);
const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }
    render() {
        const { data: chartData } = this.state;
        return (
            <React.Fragment>
                <Chart
                    data={chartData}
                    rootComponent={ChartRoot}
                >
                    <ArgumentScale factory={scalePoint} />
                    <ArgumentAxis />
                    <ValueAxis />

                    <AreaSeries
                        name="Chrome"
                        valueField="chrome"
                        argumentField="year"
                    />
                    <AreaSeries
                        name="Safari"
                        valueField="safari"
                        argumentField="year"
                    />
                    <Animation />
                    <Legend
                        position="bottom"
                        rootComponent={LegendRoot}
                        itemComponent={LegendItem}
                        labelComponent={LegendLabel}
                    />
                    <Title
                        text="Active Users by Browser"
                    />
                </Chart>
            </React.Fragment>
        );
    }
}

