import { AboutPage } from "@/pages/AboutPage";
import { ChessPage } from "@/pages/ChessPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
  AppRoutes,
  getRouteAbout,
  getRouteChess,
  getRouteMain,
} from "@/shared/const/router";
import type { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <AboutPage />,
  },
  [AppRoutes.CHESS]: {
    path: getRouteChess(),
    element: <ChessPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
