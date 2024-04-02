import * as S from "./ImageCropper.styled";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@store/index";
import { updateAvatar } from "@store/user/userActions";

import ReactCrop, { Crop } from "react-image-crop";
import { cropImage } from "@utils/imageUtils";

interface IImageCropperProps {
  initialImageUrl: string;
  onClose: () => void;
}

export default function ImageCropper({
  initialImageUrl,
  onClose,
}: IImageCropperProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [avatarUrl, setAvatarUrl] = useState<string>(initialImageUrl);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [crop, setCrop] = useState<Crop>();
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const onSave = async () => {
    if (!image || !crop) return;
    setIsLoading(true);
    try {
      const croppedImageFile = await cropImage(image, crop);
      await dispatch(updateAvatar({ file: croppedImageFile })).unwrap();
      onClose();
    } catch (error) {
      setError((error as Error)?.message);
    } finally {
      setIsLoading(false);
    }
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
        <S.SaveButton onClick={onSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </S.SaveButton>
        <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
      </S.BtnsContainer>
      {error && <S.Error>{error}</S.Error>}
    </S.ImageCropper>
  );
}
