import React, { Component } from 'react';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import styles from './Dog.module.css';

import Navigation from '../Navigation/Navigation';

class Dog extends Component {
    render() {
        const { dog } = this.props;
        return (
            <div className='root'>
                <div className={styles.container}>
                    <Card className={styles.card}>
                        {
                            dog.isLoading
                                ? <div className='loading'></div>
                                : <CardMedia
                                    className={styles.cardImg}
                                    component="img"
                                    alt="Dog"
                                    height="250"
                                    image={dog.data && dog.data.message}
                                    title="Dog"
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

export default Dog;