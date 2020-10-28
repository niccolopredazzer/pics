import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component  {
    onSearchSubmit(term) {
        axios.get( 'https://api.unsplash.com/search/photos' , {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID 6LWnOiAtmFaNPFxkskODUhLpdAN02ITJkdZSv9n3SDI'
                }
        });

        
    }


    render () {
        return (
            <div className='ui container' style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
    
};


export default App;