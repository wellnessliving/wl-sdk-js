/**
 * Returns the member's barcode and its expiry time for the specified business and user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_DynamicId_DynamicIdModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Number of seconds left until the dynamic ID expires.
   * Zero means that business uses static barcode.
   *
   * @get result
   * @type {number}
   */
  this.i_expire = undefined;

  /**
   * Unix time in seconds at which {@link Wl_Login_Member_DynamicId_DynamicIdModel.text_barcode} was issued.
   *
   * Only meaningful when {@link Wl_Login_Member_DynamicId_DynamicIdModel.is_qr} is `true`. The Achieve app combines this value with
   * {@link Wl_Login_Member_DynamicId_DynamicIdModel.text_barcode} and a hardcoded 30-second validity window to build the QR code payload,
   * and increments it locally every 30 seconds to refresh the QR code without an additional request to the server.
   *
   * @get result
   * @type {number}
   */
  this.i_qr_issued = undefined;

  /**
   * `true` if the business uses QR code as the client check-in scan format, `false` if it uses the classic barcode.
   *
   * @get result
   * @type {boolean}
   */
  this.is_qr = undefined;

  /**
   * `true` if a new dynamic ID should be generated.
   * `false` if the existing dynamic ID can be used, if it has not expired.
   *   If expired, a new dynamic ID will be generated anyway.
   *
   * @get get
   * @type {boolean}
   */
  this.is_refresh = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Barcode of the member.
   *
   * Dynamic, if business uses barcode as dynamic ID.
   * Or static, if business uses static ID. In this case {@link Wl_Login_Member_DynamicId_DynamicIdModel.i_expire} will be zero.
   *
   * @get result
   * @type {string}
   */
  this.text_barcode = undefined;

  /**
   * User unique identifier.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * URL of the barcode image.
   *
   * @get result
   * @type {string}
   */
  this.url_barcode = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_DynamicId_DynamicIdModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_DynamicId_DynamicIdModel.prototype.config=function()
{
  return {"a_field":{"i_expire":{"get":{"result":true}},"i_qr_issued":{"get":{"result":true}},"is_qr":{"get":{"result":true}},"is_refresh":{"get":{"get":true}},"k_business":{"get":{"get":true}},"text_barcode":{"get":{"result":true}},"uid":{"get":{"get":true}},"url_barcode":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_DynamicId_DynamicIdModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User unique identifier.
 * @returns {Wl_Login_Member_DynamicId_DynamicIdModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the member's barcode and its expiry time for the specified business and user.
 *
 * If the business uses dynamic barcodes, generates or refreshes a time-limited barcode and returns its value,
 * expiry countdown, and an image URL. If the business uses static barcodes, returns the member's static ID
 * with a zero expiry.
 *
 * If the business uses QR code as the scan format ({@link Wl_Login_Member_DynamicId_DynamicIdModel.is_qr}), also returns the issue
 * timestamp ({@link Wl_Login_Member_DynamicId_DynamicIdModel.i_qr_issued}) that the Achieve app uses to build and locally refresh the QR
 * code payload, and does not generate a barcode image URL.
 *
 * @function
 * @name Wl_Login_Member_DynamicId_DynamicIdModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
