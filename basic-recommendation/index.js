import React from 'react';

import { WidgetDataType, useRecommendation, widget } from '@sitecore-discover/react';
import { ProductCard } from '@sitecore-discover/ui';

export const RecommendationBasic = ({ title = '', productsToDisplay = 6 }) => {
  const {
    actions: { onProductClick },
    queryResult: { isLoading, isFetching, data: { content: { product: { value: products = [] } = {} } = {} } = {} },
  } = useRecommendation((query) => {
    query.getRequest().setNumberProducts(productsToDisplay);
  });

  const ready = !isLoading && !isFetching && products.length > 0;

  return (
    <div>
      {ready && (
        <>
          {title && <h3>{title}</h3>}
          <div>
            {products.map((p, index) => (
              <ProductCard.Root product={p} key={`product-${index}`}>
                <ProductCard.Image />
                <ProductCard.Sku />
                <ProductCard.Name>
                  <a href="#" onClick={() => onProductClick({ sku: p.sku || '' })}>
                    {p.name}
                  </a>
                </ProductCard.Name>
                {p.final_price && <span>${p.final_price}</span>}
              </ProductCard.Root>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const RecommendationBasicWidget = widget(RecommendationBasic, WidgetDataType.RECOMMENDATION);
export default RecommendationBasicWidget;
