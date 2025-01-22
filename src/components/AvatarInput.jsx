import React, { useRef, useState } from "react";
import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";

const AvatarInput = ({
  avatar,
  avatarError,
  handleFileChange,
  handleRemoveImage,
  handleChangeImage,
  inputRef,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-xl">Upload Avatar</label>
      <div className="w-full h-full rounded-lg border-2 border-neutral-700 border-dashed p-3 bg-neutral-0 bg-opacity-10  focus:outline focus:outline-inset-2 focus:outline-neutral-200 focus:ring-2 ring-neutral-900 ring-inset">
        {avatar ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={avatar}
              alt="Avatar"
              className="size-16 rounded-xl border border-neutral-300"
            />
            <div className="flex items-center justify-center gap-2">
              <button
                className="bg-neutral-0 bg-opacity-10 rounded-md px-2 py-1 focus:underline active:underline"
                onClick={handleRemoveImage}
              >
                Remove image
              </button>
              <button
                type="button"
                className="bg-neutral-0 bg-opacity-10 rounded-md px-2 py-1 focus:underline active:underline"
                onClick={handleChangeImage}
              >
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={inputRef}
                />
                Change Image
              </button>
            </div>
          </div>
        ) : (
          <div>
            <label
              htmlFor="avatarInput"
              className="flex flex-col items-center justify-center bg-opacity-50 opacity-100 hover:opacity-50 duration-150 ease-in-out transition-opacity cursor-pointer"
            >
              <div className="flex items-center justify-center h-fit w-fit bg-neutral-0 bg-opacity-10 rounded-xl border border-neutral-700 p-2 mb-2 mt-1">
                <img src={uploadIcon} alt="Avatar"></img>

                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={inputRef}
                />
              </div>
              <h2 className="text-neutral-300">
                Drag and drop or click to upload
              </h2>
            </label>
          </div>
        )}
      </div>
      <div className="flex mt-2 gap-2">
        <img src={infoIcon} />
        <p
          className={`text-xs ${
            avatarError === "Upload your photo (JPG or PNG, max size: 500KB)"
              ? "text-neutral-500"
              : "text-orange-700"
          }`}
        >
          {avatarError}
        </p>
      </div>
    </div>
  );
};

export default AvatarInput;
