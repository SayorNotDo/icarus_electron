const func = async () => {
  const response = await window.versions.ping();
  console.log(response);
};

async function TestSerial() {
  const filters = [
    { usbVendorId: 0x2341, usbProductId: 0x0043 },
    { usbVendorId: 0x2341, usbProductId: 0x0001 },
  ];
  try {
    const port = await navigator.serial.requestPort({ filters });
    const portInfo = port.getInfo();
    console.log(
      `Vendor: ${portInfo.usbVendorId} | ProductId: ${portInfo.usbProductId}`
    );
  } catch (e) {
    if (e.name === "NotFoundError") {
      console.log("Device Not Found");
    } else {
      console.log(e);
    }
  }
}
