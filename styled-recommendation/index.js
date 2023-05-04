import React from 'react';

import { WidgetDataType, useRecommendation, widget } from '@sitecore-discover/react';

import { Header, ProductsGrid, RecommendationContainer, StyledProductCard } from './styled';

export const RecommendationBasicStyled = ({ title = '', productsToDisplay = 6 }) => {
  const {
    actions: { onProductClick },
    queryResult: { isLoading, isFetching, data: { content: { product: { value: products = [] } = {} } = {} } = {} },
  } = useRecommendation((query) => {
    query.getRequest().setNumberProducts(productsToDisplay);
  });

  const ready = !isLoading && !isFetching && products.length > 0;

  return (
    <RecommendationContainer>
      {ready && (
        <>
          {title && <Header>{title}</Header>}
          <ProductsGrid>
            {products.map((p, index) => (
              <StyledProductCard.Root product={p} key={`product-${index}`}>
                <StyledProductCard.Image />
                <StyledProductCard.Content>
                  <StyledProductCard.Sku />
                  <StyledProductCard.Name>
                    <StyledProductCard.Link href="#" onClick={() => onProductClick({ sku: p.sku || '' })}>
                      {p.name}
                    </StyledProductCard.Link>
                  </StyledProductCard.Name>
                  {p.final_price && <StyledProductCard.Price>${p.final_price}</StyledProductCard.Price>}
                </StyledProductCard.Content>
              </StyledProductCard.Root>
            ))}
          </ProductsGrid>
        </>
      )}
    </RecommendationContainer>
  );
};

const RecommendationBasicStyledWidget = widget(RecommendationBasicStyled, WidgetDataType.RECOMMENDATION);
export default RecommendationBasicStyledWidget;
