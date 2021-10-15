import React, { FormEvent } from "react";
import { uploadFile } from "../../../scripts/cloudStorage";
import dataURLToFile from "../../../scripts/upload-image/dataURLToFile";
import resizeImage from "../../../scripts/upload-image/resizeImage";
import readImage from "../../../scripts/upload-image/readImage";
// Interface
interface iProps {
  name: string;
  folder: string;
  hook: any;
}
export default function ImageUploader({ name, folder, hook }: iProps) {
  // Local
  const [myImageURL, setMyImageURL] = hook;
  // Methods
  async function onImageChange(event: FormEvent) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const filename = `images/${folder}-image-${name}.png`;

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 300, 300);
    const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

    const fileUpload = await uploadFile(filename, finalImage);

    setMyImageURL(fileUpload);
  }
  return (
    <>
      {/* Image uploader */}
      <b>Upload Image:</b>
      <label className="custom-file-chooser">
        <input
          accept="image/gif, image/jpeg, image/png"
          onChange={(event) => onImageChange(event)}
          type="file"
        />
        {myImageURL !== "" ? (
          <img src={myImageURL} alt="User generated content" />
        ) : (
          ""
        )}
      </label>
    </>
  );
}
