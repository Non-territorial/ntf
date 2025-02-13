import FileUploader from "@/components/FileUploader";

export default function AdminUploader() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold my-4">Admin Uploader</h1>
      <FileUploader />
    </div>
  );
}
