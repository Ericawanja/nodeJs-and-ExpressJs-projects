import React from 'react';

function WithLoading(OriginalComponent) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <OriginalComponent {...props} />
        return <p>Hold on, fetching data might take some time</p>
    }
}

export default WithLoading;