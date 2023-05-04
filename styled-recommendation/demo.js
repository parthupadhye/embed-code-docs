() => {
  useEffect(() => {
    PageController.getContext().setPageUri('/');
  }, []);
  return (
    <div>
      <WidgetsProvider
        env={process.env.STORYBOOK_ENV}
        customerKey={process.env.STORYBOOK_CUSTOMER_KEY}
        apiKey={process.env.STORYBOOK_API_KEY}
        useToken
      >
         <Recommendation title="On Sale" rfkId="hs_random" productsToDisplay={4} />
      </WidgetsProvider>
    </div>
  );
}
