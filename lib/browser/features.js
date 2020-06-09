
const isWindowsPhone = /windows phone|iemobile|wpdesktop/i;

function isFingerprintSupported() {
  var agent = navigator.userAgent;
  return agent && !isWindowsPhone.test(agent);
};

function isPopupPostMessageSupported() {
  var isIE8or9 = document.documentMode && document.documentMode < 10;
  if (window.postMessage && !isIE8or9) {
    return true;
  }
  return false;
}

function isTokenVerifySupported() {
  return typeof crypto !== 'undefined' && crypto.subtle && typeof Uint8Array !== 'undefined';
}

function hasTextEncoder() {
  return typeof TextEncoder !== 'undefined';
}

function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}

function isHTTPS() {
  return window.location.protocol === 'https:';
}

function isLocalhost() {
  return window.location.hostname === 'localhost';
}

export {
  isFingerprintSupported,
  isPopupPostMessageSupported,
  isTokenVerifySupported,
  hasTextEncoder,
  isPKCESupported,
  isHTTPS,
  isLocalhost
};
