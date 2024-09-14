import { useState } from "react";

export const MobileCamera = () => {
  const [file, setFile] = useState<any | null>(null);
  const handleFileSelected = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const files = Array.from(e.target.files);
    console.log("files:", files);
    const _file = files[0];
    setFile(_file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleFileSelected}
      />
    </div>
  );
};
