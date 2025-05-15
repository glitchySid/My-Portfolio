import ContentViewer from "../Ui/Tiles";

function Blogs() {
  return (
    <div className="mt-20 overflow-hidden h-[calc(100vh-5rem)]">
      <div className="flex w-full h-full">
        <ContentViewer />
      </div>
    </div>
  );
}

export default Blogs;
