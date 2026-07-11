import { lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router";
// import ProtectedRoute from "./protectedRoute";
import Layout from "src/layouts";

const WorldCupIndex = lazy(() => import("src/modules/WorldCup/WorldCupIndex"));
const WorldCupYear = lazy(() => import("src/modules/WorldCup/WorldCupYear"));
const WorldCupMatch = lazy(() => import("src/modules/WorldCup/WorldCupMatch"));
const Page404 = lazy(() => import("src/modules/Page404"));

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <WorldCupIndex />,
    },
    {
        path: "/:year/:matchId",
        element: <WorldCupMatch />,
    },
    {
        path: "/:year",
        element: <WorldCupYear />,
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default () => {
    const browserRouter = useRoutes(routes);
    return <Suspense fallback={null}>{browserRouter}</Suspense>;
};
