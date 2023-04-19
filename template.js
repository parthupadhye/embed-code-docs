import { WidgetsProvider } from "@sitecore-discover/react";

const Root = () => {
    return (
        <WidgetsProvider
                env='<environment>'
                customerKey='<customer key>'
                apiDomain='<api domain>'
                useToken=false
            >
            <MyApp />
        </WidgetsProvider>
)};
