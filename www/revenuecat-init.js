
// RevenueCat JS Bridge - Listen for purchase requests from the iframe
window.addEventListener('message', async (event) => {
    if (event.data && event.data.type === 'APPTHUNDER_PURCHASE') {
        const packageId = event.data.packageId;
        try {
            const { customerInfo } = await Purchases.purchasePackage(packageId);
            document.getElementById('app-iframe').contentWindow.postMessage({
                type: 'APPTHUNDER_PURCHASE_SUCCESS',
                customerInfo: customerInfo
            }, '*');
        } catch (error) {
            document.getElementById('app-iframe').contentWindow.postMessage({
                type: 'APPTHUNDER_PURCHASE_ERROR',
                error: error.message
            }, '*');
        }
    }
});
