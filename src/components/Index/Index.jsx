import React from 'react';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import Navigation from '../Navigation/Navigation';

function Index(props) {
    const {cat, dog, fox} = props;
    return (
        <div className='root'>
            <div className='container'>
                <Card className='card'>
                    {
                        cat.isLoading
                            ? <div className='loading'></div>
                            : <CardMedia
                                className='cardImg'
                                component="img"
                                alt="Cat"
                                height="250"
                                image={cat.data && 'https://cataas.com/' + cat.data.url}
                                title="Cat"
                            />
                    }
                </Card>
                <Card className='card'>
                    {
                        dog.isLoading
                            ? <div className='loading'></div>
                            : <CardMedia
                                className='cardImg'
                                component="img"
                                alt="Dog"
                                height="250"
                                image={dog.data && dog.data.message}
                                title="Dog"
                            />
                    }
                </Card>
                <Card className='card'>
                    {
                        fox.isLoading
                            ? <div className='loading'></div>
                            : <CardMedia
                                className='cardImg'
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

export default Index;