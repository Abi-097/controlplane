import React, { useState } from "react";

interface ColorPickerProps {
  onColorSelect: (color: string) => void;
}

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
  "#8B008B",
  "#FF6347",
  "#40E0D0",
  "#EE82EE",
  "#D3D3D3",
  "#FF1493",
  "#00BFFF",
];

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColorClick(color)}
          style={{
            backgroundColor: color,
            width: "18px",
            height: "18px",
            borderRadius: selectedColor === color ? "50%" : "0px",
            cursor: "pointer",
            transition: "border-radius 0.3s",
          }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
