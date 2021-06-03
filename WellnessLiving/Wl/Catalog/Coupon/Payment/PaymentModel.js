/**
 * Retrieves information about coupon price.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Coupon_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Coupon_Payment_PaymentModel_a_coupon
   * @property {string} dt_send Send date.
   * @property {boolean} is_mail Determines that coupon will be sent by email.
   * @property {string} k_business Business key.
   * @property {string} k_coupon Coupon ID.
   * @property {string} s_image Image string ID.
   * @property {string} s_mail Recipient email.
   * @property {string} s_message Coupon message.
   * @property {string} s_recipient Recipient name.
   * @property {string} s_sender Sender name.
   */

  /**
   * The list of coupon data.<dl>
   *   <dt>string <var>dt_send</var></dt>
   *   <dd>Send date.</dd>
   *
   *   <dt>bool <var>is_mail</var></dt>
   *   <dd>Determines that coupon will be sent by email.</dd>
   *
   *   <dt>string <var>k_business</var></dt>
   *   <dd>Business key.</dd>
   *
   *   <dt>string <var>k_coupon</var></dt>
   *   <dd>Coupon ID.</dd>
   *
   *   <dt>string <var>s_image</var></dt>
   *   <dd>Image string ID.</dd>
   *
   *   <dt>string <var>s_mail</var></dt>
   *   <dd>Recipient email.</dd>
   *
   *   <dt>string <var>s_message</var></dt>
   *   <dd>Coupon message.</dd>
   *
   *   <dt>string <var>s_recipient</var></dt>
   *   <dd>Recipient name.</dd>
   *
   *   <dt>string <var>s_sender</var></dt>
   *   <dd>Sender name.</dd>
   * </dl>
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?Wl_Catalog_Coupon_Payment_PaymentModel_a_coupon}
   */
  this.a_coupon = null;

  /**
   * A list of payment sources to pay with.
   *
   * Structure of this array corresponds structure of {@link \RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * Key of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Business key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Location key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * ID of purchase that was created during payment.
   *
   * @post result
   * @type {?string}
   */
  this.k_purchase = null;

  /**
   * Discount code value.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Coupon_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Coupon_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field": {"a_coupon": {"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_location": {"post": {"post": true}},"k_purchase": {"post": {"result": true}},"text_discount_code": {"post": {"post": true}}}};
};