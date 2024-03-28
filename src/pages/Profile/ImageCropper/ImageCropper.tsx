import ReactCrop, { Crop } from "react-image-crop";
import * as S from "./ImageCropper.styled";
import { useState } from "react";
import { cropImage } from "@utils/imageUtils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { updateAvatar } from "@store/user/userActions";

interface IImageCropperProps {
  initialImageUrl: string;
}

export default function ImageCropper({ initialImageUrl }: IImageCropperProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [avatarUrl, setAvatarUrl] = useState<string>(initialImageUrl);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [crop, setCrop] = useState<Crop>();
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const onSave = () => {
    if (!image || !crop) return;
    setIsLoading(true);
    cropImage(image, crop)
      .then((croppedImageFile) =>
        dispatch(updateAvatar({ file: croppedImageFile })).unwrap()
      )
      .catch((error) => console.error(error?.message))
      .finally(() => setIsLoading(false));
  };

  const onAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setCrop(undefined);
  };

  return (
    <S.ImageCropper>
      <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <S.Image
          crossOrigin="anonymous"
          src={avatarUrl || ""}
          onLoad={(e) => {
            setImage(e.currentTarget);
          }}
        />
      </ReactCrop>
      <input type="file" accept="image/*" onChange={onAvatarFileChange} />
      <S.BtnsContainer>
        <S.ClearButton onClick={() => setCrop(undefined)}>Clear</S.ClearButton>
        <S.SaveButton onClick={onSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </S.SaveButton>
        <S.CancelButton onClick={() => console.log("Cancel")}>
          Cancel
        </S.CancelButton>
      </S.BtnsContainer>
    </S.ImageCropper>
  );
}
