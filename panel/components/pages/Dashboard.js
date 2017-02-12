import React from 'react';
import ChartistGraph from 'react-chartist';

import Card from '../dashboard/Card';
import CardHeader from '../dashboard/CardHeader';
import CardFooter from '../dashboard/CardFooter';
import CardContent from '../dashboard/CardContent';
import CardFooterLegend from '../dashboard/CardFooterLegend';
import CardFooterStats from '../dashboard/CardFooterStats';
import helpers from '../../helpers';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <div className="col-md-4">
                    <Card>
                        <CardHeader title="Approval Statistics" subTitle="Chart of the approval states"/>
                        <CardContent>
                            <ChartistGraph data={helpers.pieChartData} type={'Pie'} />
                        <CardFooter>
                            <CardFooterLegend>
                                <i className="fa fa-circle text-info" /> Pending
                                <i className="fa fa-circle text-danger" /> Approved
                                <i className="fa fa-circle text-warning" /> Denied
                            </CardFooterLegend>
                            <hr/>
                            <CardFooterStats>
                                <i className="fa fa-clock-o" /> Last updated 34 min ago
                            </CardFooterStats>
                        </CardFooter>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-md-8">
                    <Card>
                        <CardHeader title="Users Behavior" subTitle="24 Hours performance"/>
                        <CardContent>
                            <ChartistGraph data={helpers.dataSale} options={helpers.optionsSales} responsive-options={helpers.responsiveOptions} type={'Line'} />
                        <CardFooter>
                            <CardFooterLegend>
                                <i className="fa fa-circle text-info" /> Mobile
                                <i className="fa fa-circle text-danger" /> Desktop
                                <i className="fa fa-circle text-warning" /> Unknown
                            </CardFooterLegend>
                            <hr/>
                            <CardFooterStats>
                                <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                            </CardFooterStats>
                        </CardFooter>
                        </CardContent>
                    </Card>
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;