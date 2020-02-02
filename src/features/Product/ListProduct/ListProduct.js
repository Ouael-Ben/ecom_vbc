import React from 'react'
import withAuthenticated from '../../../components/HOC/Authenticated';
function ListProduct() {
    return (
        <div>
            List Product
        </div>
    )
}

export default withAuthenticated(ListProduct);
