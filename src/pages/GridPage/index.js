import React from 'react';
import Grid from '../../components/Grid';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

const GridPage = () => {
    return (
        <Grid>
            <Row>
                <Col colNum={12}>
                    <div>Content 1</div>
                </Col>
            </Row>
            <Row>
                <Col colNum={3}>
                    <div>Content 2.1</div>
                </Col>
                <Col colNum={3}>
                    <div>Content 2.2</div>
                </Col>
                <Col colNum={3}>
                    <div>Content 2.3</div>
                </Col>
                <Col colNum={3}>
                    <div>Content 2.4</div>
                </Col>
            </Row>
            <Row>
                <Col colNum={4}>
                    <div>Content 3.1</div>
                </Col>
                <Col colNum={4}>
                    <div>Content 3.2</div>
                </Col>
                <Col colNum={4}>
                    <div>Content 3.3</div>
                </Col>
            </Row>
        </Grid>
    );
}

export default GridPage;


