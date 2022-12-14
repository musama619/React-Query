import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Link } from "react-router-dom";
import { Home } from "./components/Home.pages";
import { RQUsers } from "./components/RQUsers.pages";
import { User } from "./components/User.page";
import { DynamicParallelQueries } from "./components/DynamicParallelQueries.page";
import { PaginatedQueries } from "./components/PaginatedQueries.page";
import { InfiniteQueries } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rq-users">RQUsers</Link>
                        </li>
                        <li>
                            <Link to="/pagination">Pagination</Link>
                        </li>
                        <li>
                            <Link to="/infinite">Infinite</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rq-users" element={<RQUsers />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route
                        path="/dynamic-users"
                        element={<DynamicParallelQueries userIds={[1, 3]} />}
                    />
                    <Route path="/pagination" element={<PaginatedQueries />} />
                    <Route path="/infinite" element={<InfiniteQueries />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
