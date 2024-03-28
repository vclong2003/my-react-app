import { Crop } from "react-image-crop";

export const cropImage = (image: HTMLImageElement, crop: Crop) => {
  return new Promise<File>((resolve, reject) => {
    if (!image || !crop) return reject("Crop canvas does not exist");

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const pixelRatio = window.devicePixelRatio;
    const canvas = document.createElement("canvas");
    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    const ctx = canvas.getContext("2d");
    if (!ctx) return reject("Canvas context does not exist");
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
        if (!blob) return reject("Canvas is empty");

        // file name from img src
        const fileName = decodeURIComponent(image.src).split("/").pop();
        const file = new File([blob], `${fileName}.jpeg`, {
          type: "image/jpeg",
        });

        return resolve(file);
      },
      "image/jpeg",
      1
    );
  });
};
