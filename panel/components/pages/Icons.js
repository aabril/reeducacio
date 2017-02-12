import React from 'react';
import Card from '../dashboard/Card';
import CardHeader from '../dashboard/CardHeader';
import CardContent from '../dashboard/CardContent';

require('../../styles/demo.css');

class Icons extends React.Component {
    render() {
        return (
                <div className="col-md-12">
                    <Card>
                        <CardHeader title="Light Bootstrap Table Heading" subTitle="Created using Roboto Font Family"/>
                        <CardContent icons>
                            <div className="row">

                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>
                                <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                    <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                        <input type="text" value="pe-7s-album" />
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>
        );
    }
}

Icons.propTypes = {};
Icons.defaultProps = {};

export default Icons;