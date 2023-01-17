import React from 'react';

function WithLoading(component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <component {...props} />
        return <p>Hold on, fetching data might take some time</p>
    }
}

export default WithLoading;