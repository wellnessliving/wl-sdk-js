/**
 * Sends the client an email with the waiver or the contract that the client has not signed.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Kiosk_SignSendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location of the kiosk.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of the purchase item whose contract is sent: the `k_purchase_item` of a contract alert of the client
   * ({@link Wl_Profile_Alert_AlertModel.a_alert}).
   *
   * `null` to send the waiver of the business.
   *
   * @post post
   * @type {?string}
   */
  this.k_purchase_item = null;

  /**
   * Key of the client.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Kiosk_SignSendModel);

/**
 * @inheritDoc
 */
Wl_Visit_Kiosk_SignSendModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}},"k_purchase_item":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Sends the client an email with the waiver or the contract that the client has not signed.
 *
 * Without {@link Wl_Visit_Kiosk_SignSendModel.k_purchase_item} the waiver of the business is sent, if the business requires a
 * waiver and the client has not signed it. With it, the contract of that purchase item is sent, if it is a
 * contract of the business that the client has not signed. The email is the copy of the document that the
 * profile of the client sends, without a date of signing. A normal answer means that the email is queued; the
 * email address is not returned.
 *
 * The checks go in this order, and the code of a refusal tells which of them has failed:
 * <ul>
 * <li>`access-backend`: no session of a staff member, or no access to the business;</li>
 * <li>`access`: no access to the location or to the client;</li>
 * <li>`sign-none`: the client has no such document to sign;</li>
 * <li>`mail-nx`: the client has no email address.</li>
 * </ul>
 *
 * @function
 * @name Wl_Visit_Kiosk_SignSendModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
