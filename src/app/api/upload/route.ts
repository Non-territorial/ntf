import { put } from '@vercel/blob';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  // Upload file to Vercel Blob Storage
  const blob = await put(file.name, file, {
    access: 'public', // Make the file publicly accessible
  });

  return Response.json({ url: blob.url });
}
