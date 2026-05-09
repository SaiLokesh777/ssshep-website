import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const ImageUpload = ({ value, onChange, label = "Upload Image", className = "" }) => {
  const ref = useRef();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className={`${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div
        onClick={() => ref.current.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer hover:border-saffron-400 transition-colors group text-center"
      >
        {value ? (
          <div className="relative">
            <img src={value} alt="Preview" className="mx-auto max-h-40 rounded-lg object-cover" />
            <p className="text-xs text-gray-400 mt-2">Click to change</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-saffron-500 transition-colors">
            <Upload size={28} />
            <p className="text-sm font-medium">Click to upload image</p>
            <p className="text-xs">PNG, JPG, JPEG supported</p>
          </div>
        )}
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  );
};

export default ImageUpload;
