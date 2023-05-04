import styled from 'styled-components';

import { ProductCard, theme } from '@sitecore-discover/ui';

const StyledProductRoot = styled(ProductCard.Root)`
  border: solid 1px ${theme.vars.palette.grey['400']};
  box-shadow: 2px 2px 4px ${theme.vars.palette.grey['400']};
  box-sizing: border-box;
  max-width: 200px;
  padding: ${theme.vars.spacing.m};
  cursor: pointer;
  display: block;

  &:focus-within {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
  &:hover {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
`;

const StyledProductImage = styled(ProductCard.Image)`
  width: 100%;
  object-fit: cover;
  display: block;
`;

const StyledProductName = styled(ProductCard.Name)`
  margin: 0 0 ${theme.vars.spacing.m};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
  font-weight: ${theme.vars.typography.fontSize4.fontWeight};
  line-height: ${theme.vars.typography.fontSize4.lineHeight};
`;

const StyledProductContent = styled(ProductCard.Content)`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  font-weight: ${theme.vars.typography.fontWeight};
  line-height: ${theme.vars.typography.lineHeight};
  margin: 0;
`;

const StyledProductSku = styled(ProductCard.Sku)`
  font-family: ${theme.vars.typography.fontFamilySystem};
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
`;

const StyledProductLink = styled.a`
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize};
  line-height: ${theme.vars.typography.lineHeight};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const StyledPrice = styled.span`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
`;

export const StyledProductCard = {
  Link: StyledProductLink,
  Sku: StyledProductSku,
  Content: StyledProductContent,
  Image: StyledProductImage,
  Name: StyledProductName,
  Root: StyledProductRoot,
  Price: StyledPrice,
};

export const Header = styled.h3`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize3.fontSize};
`;

export const RecommendationContainer = styled.div``;

export const ProductsGrid = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  font-family: ${theme.vars.typography.fontFamilySystem};
  justify-content: flex-start;
  gap: ${theme.vars.spacing.m};
`;import styled from 'styled-components';

import { ProductCard, theme } from '@sitecore-discover/ui';

const StyledProductRoot = styled(ProductCard.Root)`
  border: solid 1px ${theme.vars.palette.grey['400']};
  box-shadow: 2px 2px 4px ${theme.vars.palette.grey['400']};
  box-sizing: border-box;
  max-width: 200px;
  padding: ${theme.vars.spacing.m};
  cursor: pointer;
  display: block;

  &:focus-within {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
  &:hover {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
`;

const StyledProductImage = styled(ProductCard.Image)`
  width: 100%;
  object-fit: cover;
  display: block;
`;

const StyledProductName = styled(ProductCard.Name)`
  margin: 0 0 ${theme.vars.spacing.m};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
  font-weight: ${theme.vars.typography.fontSize4.fontWeight};
  line-height: ${theme.vars.typography.fontSize4.lineHeight};
`;

const StyledProductContent = styled(ProductCard.Content)`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  font-weight: ${theme.vars.typography.fontWeight};
  line-height: ${theme.vars.typography.lineHeight};
  margin: 0;
`;

const StyledProductSku = styled(ProductCard.Sku)`
  font-family: ${theme.vars.typography.fontFamilySystem};
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
`;

const StyledProductLink = styled.a`
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize};
  line-height: ${theme.vars.typography.lineHeight};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const StyledPrice = styled.span`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
`;

export const StyledProductCard = {
  Link: StyledProductLink,
  Sku: StyledProductSku,
  Content: StyledProductContent,
  Image: StyledProductImage,
  Name: StyledProductName,
  Root: StyledProductRoot,
  Price: StyledPrice,
};

export const Header = styled.h3`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize3.fontSize};
`;

export const RecommendationContainer = styled.div``;

export const ProductsGrid = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  font-family: ${theme.vars.typography.fontFamilySystem};
  justify-content: flex-start;
  gap: ${theme.vars.spacing.m};
`;
