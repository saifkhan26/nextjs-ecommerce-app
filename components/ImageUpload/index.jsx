'use client'
import { useState, useEffect } from 'react';

export const ImageUpload = ({ value, setValue, className, label }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    setSelectedImage(value);
    if (value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(value);
    } else {
      setPreviewImage(null);
    }
  }, [value]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }

    setValue(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setValue(null);
  };

  return (
    <div className={`grid gap-4 ${className}`}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />
      {
        label && 
          <label
            htmlFor="image-upload"
            className={ `bg-white cursor-pointer bg-gray-200 py-2 px-4 rounded-md text-gray-800 font-medium hover:bg-gray-300 focus:outline-none focus:bg-gray-300` }
          >
            {selectedImage ? 'Change Image' : 'Select Image'}
          </label>
      }
      {selectedImage && (
        <div className="max-h-40 rounded-r-md  justify-self-start flex">
          <img src={previewImage} alt="Preview" className="max-h-full rounded-md" />
          <button
            onClick={handleImageRemove}
            className="px-2 py-1 bg-bright-rose text-white rounded-e-md text-sm focus:outline-none hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};;

