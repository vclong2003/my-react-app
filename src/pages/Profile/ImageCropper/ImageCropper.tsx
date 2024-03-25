import ReactCrop, { Crop } from "react-image-crop";
import * as S from "./ImageCropper.styled";
import { useState } from "react";

interface IImageCropperProps {
  initialImageUrl: string;
}

export default function ImageCropper({ initialImageUrl }: IImageCropperProps) {
  const [crop, setCrop] = useState<Crop>();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(initialImageUrl);

  const onAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAvatarFile(e.target.files[0]);
    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setCrop(undefined);
  };

  return (
    <S.ImageCropper>
      <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <S.Image src={avatarUrl || ""} />
      </ReactCrop>
      <input type="file" accept="image/*" onChange={onAvatarFileChange} />
      <S.BtnsContainer>
        <S.ClearButton onClick={() => setCrop(undefined)}>Clear</S.ClearButton>
        <S.SaveButton onClick={() => console.log("Save")}>Save</S.SaveButton>
        <S.CancelButton onClick={() => console.log("Cancel")}>
          Cancel
        </S.CancelButton>
      </S.BtnsContainer>
    </S.ImageCropper>
  );
}
