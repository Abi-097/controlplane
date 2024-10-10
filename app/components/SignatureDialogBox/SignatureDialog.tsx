import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (signature: string) => void;
}

const SignatureDialog: React.FC<SignatureDialogProps> = ({ isOpen, onClose, onSave }) => {
  const [signature, setSignature] = useState<string>('');
  const signatureRef = useRef<SignatureCanvas>(null);

  const handleClear = () => {
    signatureRef.current?.clear();
    setSignature('');
  };

  const handleSave = () => {
    if (signatureRef.current) {
      const dataURL = signatureRef.current.toDataURL();
      setSignature(dataURL);
      onSave(dataURL);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Digital Signature</h2>
        <div className="border border-gray-300 mb-4">
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{
              className: 'signature-canvas',
              width: 300,
              height: 150,
            }}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureDialog;