import React, { useState } from 'react';

const Toast = () => {
  const [show, setShow] = useState(false);

  const triggerToast = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000); // 3 second baad automatic gayab
  };

  return (
    <div className="flex flex-col justify-between m-5 p-3">
      {/* Buttons */}
      <div className="flex flex-row gap-3 justify-center items-center h-100">
        <div><button onClick={triggerToast} className="bg-green-500 text-white p-2 rounded">Success</button></div>
        <div><button onClick={triggerToast} className="bg-blue-500 text-white p-2 rounded">Info</button></div>
        <div><button onClick={triggerToast} className="bg-yellow-500 text-white p-2 rounded">Warning</button></div>
        <div><button onClick={triggerToast} className="bg-red-500 text-white p-2 rounded">Danger</button></div>
      </div>

      {/* Toast Notification */}
      <div className={`fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl transform transition-all duration-300 ease-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      }`}>
        Success <span className="ml-2 cursor-pointer" onClick={() => setShow(false)}>X</span>
      </div>
    </div>
  );
};

export default Toast;