import { Crop } from "react-image-crop";

export const cropImage = (
  image: HTMLImageElement,
  crop: Crop,
  onCropped: (file: File) => void
) => {
  const canvas = document.createElement("canvas");

  if (!image || !crop) throw new Error("Crop canvas does not exist");

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const ctx = canvas.getContext("2d");

  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio * scaleX;
  canvas.height = crop.height * pixelRatio * scaleY;

  if (!ctx) {
    throw new Error("Canvas context does not exist");
  }
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width * scaleX,
    crop.height * scaleY
  );

  canvas.toBlob(
    (blob) => {
      if (!blob) throw new Error("Canvas is empty");
      const fileName = decodeURIComponent(image.src).split("/").pop();
      const file = new File([blob], `${fileName}.jpeg`, {
        type: "image/jpeg",
      });
      onCropped(file);
    },
    "image/jpeg",
    1
  );
};
