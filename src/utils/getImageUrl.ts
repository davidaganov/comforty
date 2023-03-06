interface Image {
  fileName: string
  folder: string
}

export const getImageUrl = ({ fileName, folder = "images" }: Image): string => {
  return new URL(`../assets/${folder}/${fileName}`, import.meta.url).href
}
