/**
 * A list of devices supported by credit card reader plugin.
 *
 * <b>*** ATTENTION ***</b> If you modify this class, you should also modify its counterparts in Java and ObjectiveC.
 *
 * Last used ID: 17.
 */
function Thoth_WlPay_Cordova_CordovaCcrDeviceSid()
{
  // Empty constructor.
}

/**
 * Payment processor: Direct Connect.
 *
 * Device: `IDTech/Augusta`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_IDT_AUGUSTA = 4;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `IDTech/BTMag`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_IDT_BT_MAG = 5;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `IDTech/UniMag`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_IDT_UNI_MAG = 6;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `IDTech/UniPay`.
 *
 * Not supported in iOS.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_IDT_UNI_PAY = 7;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `Magtek`, connection over audio jack. Supported devices: `uDynamo`, `aDynamo`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_MAGTEK_AUDIO = 11;

/**
 * Payment processor: Paragon (ex. Direct Connect).
 *
 * Device: `Magtek`, bluetooth connection. Supported device - `eDynamo`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_MAGTEK_BLUETOOTH = 13;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `iDynamo` (for iOS only).
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_MAGTEK_LIGHTNING = 12;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `IDTech/Miura`.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_MIURA = 8;

/**
 * Payment processor: Direct Connect.
 *
 * Device: `PAX`.
 *
 * Documentation says that this device manager is not implemented.
 * In Direct Connect SDK we see that there is a library for iOS, but not for Android.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.DC_PAX = 9;

/**
 * Payment processor: NMI.
 *
 * Device: Enterprise.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.NMI_ENTERPRISE = 3;

/**
 * Payment processor: NMI.
 *
 * Device: IPS.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.NMI_IPS = 2;

/**
 * Payment processor: NMI.
 *
 * Device: Unimag.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.NMI_UNIMAG = 1;

/**
 * Payment processor: Stripe.
 *
 * Device: Simulated BBPOS WisePOS E.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.STRIPE_BBPOS_SIMULATED_WISEPOS_E = 17;

/**
 * Payment processor: Stripe.
 *
 * Device: BBPOS Wisepad 3.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.STRIPE_BBPOS_WISEPAD_3_BLUETOOTH = 14;

/**
 * Payment processor: Stripe.
 *
 * Device: BBPOS WisePOS E.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.STRIPE_BBPOS_WISEPOS_E_INTERNET = 15;

/**
 * Payment processor: Stripe.
 *
 * Device: Stripe Reader M2.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.STRIPE_READER_M2_BLUETOOTH = 16;

/**
 * Virtual device for testing purposes.
 *
 * Currently supported only by Direct Connect.
 *
 * @type {number}
 */
Thoth_WlPay_Cordova_CordovaCcrDeviceSid.VIRTUAL = 10;
