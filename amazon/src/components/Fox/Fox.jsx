import React, { Component } from 'react';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import styles from './Fox.module.css';

import Navigation from '../Navigation/Navigation';

class Fox extends Component {
    render() {
        const { fox } = this.props;
        return (
            <div className='root'>
                <div className={styles.container}>
                    <Card className={styles.card}>
                        {
                            fox.isLoading
                                ? <div className='loading'></div>
                                : <CardMedia
                                    className={styles.cardImg}
                                    component="img"
                                    alt="Fox"
                                    height="250"
                                    image={fox.data && fox.data.image}
                                    title="Fox"
                                />
                        }
                    </Card>
                </div>
                <div className='navigation'>
                    <Navigation />
                </div>
            </div>
        );
    }
}

export default Fox;