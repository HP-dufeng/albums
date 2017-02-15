import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props){
        super(props)

        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({albums: response.data});
            });
    }

    renderAblums() {
        return this.state.albums.map(m => 
            <AlbumDetail key={m.title} album={m} />
        );
    }

    render() {
        return(
            <ScrollView>
                {this.renderAblums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
