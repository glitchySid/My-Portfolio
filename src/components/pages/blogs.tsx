import ContentViewer from "../Ui/Tiles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Blogs() {
  return (
  <QueryClientProvider client={queryClient}>
    <div className="mt-20 overflow-hidden h-[calc(100vh-5rem)]">
      <div className="flex w-full h-full">
        <ContentViewer />
      </div>
    </div>
  </QueryClientProvider>
  );
}

export default Blogs;
