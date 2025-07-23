import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import SafeIcon from '../common/SafeIcon';
import { FiUploadCloud, FiFile, FiFileText, FiImage, FiX } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';

const FileUpload = () => {
  const { uploads, addUpload, removeUpload } = useAppContext();
  
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(file => {
      addUpload(file);
    });
  }, [addUpload]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'text/csv': ['.csv']
    }
  });
  
  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return FiImage;
    if (type === 'application/pdf') return FiFileText;
    if (type === 'text/csv') return FiFileText;
    return FiFile;
  };
  
  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive 
            ? 'border-primary-400 bg-primary-50' 
            : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
          }`}
      >
        <input {...getInputProps()} />
        <SafeIcon 
          icon={FiUploadCloud} 
          className="mx-auto h-12 w-12 text-gray-400"
        />
        <p className="mt-2 text-sm font-medium text-gray-900">
          {isDragActive 
            ? 'Drop the files here...' 
            : 'Drag and drop files, or click to select files'}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Upload screenshots, documents, or data files (PNG, JPG, PDF, DOCX, TXT, CSV)
        </p>
      </div>
      
      {uploads.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Uploaded files ({uploads.length})
          </h3>
          <ul className="divide-y divide-gray-200">
            {uploads.map((file) => (
              <li key={file.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <SafeIcon 
                      icon={getFileIcon(file.type)} 
                      className="h-5 w-5 text-gray-600"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeUpload(file.id)}
                  className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
                >
                  <SafeIcon icon={FiX} className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;