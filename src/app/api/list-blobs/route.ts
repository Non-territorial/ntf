import { list } from "@vercel/blob";

export async function GET() {
  try {
    // Fetch blobs from Vercel Blob (limit results for better performance)
    const blobsResponse = await list({ limit: 25 });

    console.log("Blobs API Response:", blobsResponse);

    const blobs = blobsResponse?.blobs || [];

    return Response.json({
      success: true,
      blobs: blobs.map(blob => ({
        url: blob.url,
        type: blob.url.endsWith(".mp4") ? "video" : "image", // Detect video vs. image
        downloadUrl: blob.downloadUrl,
        name: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error("Error fetching blobs:", err);

    if (err.name === "AbortError") {
      return Response.json(
        { success: false, error: "Request timed out. Try again." },
        { status: 408 }
      );
    }

    return Response.json(
      { success: false, error: "Failed to fetch media." },
      { status: 500 }
    );
  }
}
