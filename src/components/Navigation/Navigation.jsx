import React, { Component } from 'react';
import styles from './Navigation.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <div>
                <List className={styles.navigation}>
                    <Link className={styles.navigationLink} to='/'>
                        <ListItem button>
                            <ListItemText className={styles.navigationItem} primary="Index" />
                        </ListItem>
                    </Link>
                    <Link className={styles.navigationLink} to="/cat">
                        <ListItem button>
                            <ListItemText className={styles.navigationItem} primary="Cat" />
                        </ListItem>
                    </Link>
                    <Link className={styles.navigationLink} to="/dog">
                        <ListItem button>
                            <ListItemText className={styles.navigationItem} primary="Dog" />
                        </ListItem>
                    </Link>
                    <Link className={styles.navigationLink} to="/fox">
                        <ListItem button>
                            <ListItemText className={styles.navigationItem} primary="Fox" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
    }
}

export default Navigation;