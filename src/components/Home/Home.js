import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Home here!!</h1>
            <p>Current user is:{user? user.displayName : 'No Body'} </p>
        </div>
    );
};

export default Home;