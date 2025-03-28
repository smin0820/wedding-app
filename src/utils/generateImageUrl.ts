export default function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dcyd8uzlr/image/upload/${option}/v1743141438/${format}/${filename}.${format}`
}
