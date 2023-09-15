import {
  createBrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./routes/Index";
import { WhatsappProvider } from "./context/WhatsappContext";
import ConversationLayout from "./layouts/ConversationLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import ThrowError from "./components/ThrowError";
import ThrowNotFound from "./components/ThrowNotFound";

const routes = [
  {
    // path?: string;
    // index?: boolean;
    // children?: React.ReactNode;
    // caseSensitive?: boolean;
    // id?: string;
    // loader?: LoaderFunction;
    // action?: ActionFunction;
    // element?: React.ReactNode | null;
    // Component?: React.ComponentType | null;
    // errorElement?: React.ReactNode | null;
    // ErrorBoundary?: React.ComponentType | null;
    // handle?: RouteObject["handle"];
    // shouldRevalidate?: ShouldRevalidateFunction;
    // lazy?: LazyRouteFunction<RouteObject>;

    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Index />,
      },

      {
        path: "conversation",
        element: <ConversationLayout />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <div>conversation index</div>,
          },
          { path: ":conversationId", element: <div>in specific conv</div> },
          { path: "error", element: <ThrowError /> },
        ],
      },

      {
        path: "*",
        element: <ThrowNotFound />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
];

// created memory router in production, browser router in development
const router = import.meta.env.DEV
  ? createBrowserRouter(routes)
  : createMemoryRouter(routes);

function App() {
  return (
    <WhatsappProvider>
      <RouterProvider router={router} />
    </WhatsappProvider>
  );
}

export default App;
