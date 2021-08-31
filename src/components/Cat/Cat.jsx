import React, { Component } from 'react';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import styles from './Cat.module.css';

import Navigation from '../Navigation/Navigation';

class Cat extends Component {
    render() {
        const { cat } = this.props;
        return (
            <div className='root'>
                <div className={styles.container}>
                    <Card className={styles.card}>
                        {
                            cat.isLoading
                                ? <div className='loading'></div>
                                : <CardMedia
                                    className={styles.cardImg}
                                    component="img"
                                    alt="Cat"
                                    height="250"
                                    image={cat.data && 'https://cataas.com/' + cat.data.url}
                                    title="Cat"
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

export default Cat;