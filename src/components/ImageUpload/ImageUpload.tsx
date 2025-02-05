'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import React from 'react';
import { TbPhotoPlus } from 'react-icons/tb';
import styles from './ImageUpload.module.scss';

declare global {
  // eslint-disable-next-line no-var
  var cloudinary: any
}

interface IImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<IImageUploadProps> = ({
  onChange,
  value
}) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleUpload = (result: any) => {
    // console.log('result', result);
    onChange(result.info.secure_url);
  }

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_NAME;

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={styles['image-uploader']}
          >
            <TbPhotoPlus
              size={50}
            />

            {value && (
              <div className={styles['inner']}>
                <Image
                  fill
                  style={{ objectFit: 'cover'}}
                  src={value}
                  alt="house"
                />
              </div>
            )}
            
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload