import React from 'react'

const ProductDetail = (match,product) => {
    const products = product.find(elt =>elt.id == match.params.id)
    return (
        <div>
            {products.name}
            {products.img   }
        </div>
    )
}

export default ProductDetail
