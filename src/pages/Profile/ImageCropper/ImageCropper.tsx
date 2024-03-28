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
  const [crop, setCrop] = useState<Crop>();
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(initialImageUrl);

  const test = async () => {
    if (!image || !crop) return;
    cropImage(image, crop, (file) => {
      dispatch(updateAvatar({ file }));
    });
  };

  const onAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAvatarFile(e.target.files[0]);
    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setCrop(undefined);
  };

  return (
    <S.ImageCropper>
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCrop(c)}>
        <S.Image
          crossOrigin="anonymous"
          src={avatarUrl || ""}
          onLoad={(e) => {
            setImage(e.currentTarget);
            console.log(e.currentTarget);
          }}
        />
      </ReactCrop>
      <input type="file" accept="image/*" onChange={onAvatarFileChange} />
      <S.BtnsContainer>
        <S.ClearButton onClick={() => setCrop(undefined)}>Clear</S.ClearButton>
        <S.SaveButton onClick={() => test()}>Save</S.SaveButton>
        <S.CancelButton onClick={() => console.log("Cancel")}>
          Cancel
        </S.CancelButton>
      </S.BtnsContainer>
    </S.ImageCropper>
  );
}
