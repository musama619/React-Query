import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Link } from "react-router-dom";
import { Home } from "./components/Home.pages";
import { RQUsers } from "./components/RQUsers.pages";

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
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rq-users" element={<RQUsers />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools position="bottom-right"/>
        </QueryClientProvider>
    );
}

export default App;
