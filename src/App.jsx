import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthProvider";
import Routes from "./Routes";


const queryClient = new QueryClient();
function App() {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Routes/>
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default App;
