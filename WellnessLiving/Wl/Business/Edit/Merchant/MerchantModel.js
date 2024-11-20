/**
 * An endpoint that manages a business's merchant processing settings:
 *
 * This endpoint can return detailed information about business merchants. It can also add or edit merchant settings
 * for the specified business.
 *
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Edit_Merchant_MerchantModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list_a_pay_method
   * @property {number} id_pay_method The payment method ID. One of the {@link RsPayMethodSid} constants.
   * @property {string} text_title The payment method title.
   */
  /**
   * @typedef {{}} Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list
   * @property {{}} a_merchant Additional business merchant settings.
   * @property {Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list_a_pay_method} a_pay_method A list of
   * supported payment methods:<dl>
   * <dt>int <tt>id_pay_method</tt></dt>
   * <dd>The payment method ID. One of the {@link RsPayMethodSid} constants.</dd>
   * <dt>string <tt>text_title</tt></dt>
   * <dd>Title of the payment method.</dd>
   *   </dl>
   * @property {number} id_pay_processor The payment gateway ID from {@link RsPayProcessorSid}.
   * @property {string} k_business_merchant The business merchant key.
   * @property {string} text_gateway_title The payment gateway title.
   * @property {string} text_merchant_id The merchant ID.
   * @property {string} text_processor_title The payment processor title.
   */

  /**
   * A list of business merchants with detailed information. Each element has the next structure:
   * <dl>
   *   <dt>array <var>a_merchant</var></dt>
   *   <dd>Additional business merchant settings.</dd>
   *   <dt>array <var>a_pay_method</var></dt>
   *   <dd>A list of supported payment methods:<dl>
   *     <dt>int <var>id_pay_method</var></dt>
   *     <dd>The payment method ID. One of the {@link RsPayMethodSid} constants.</dd>
   *     <dt>string <var>text_title</var></dt>
   *     <dd>The payment method title.</dd>
   *   </dl></dd>
   *   <dt>int <var>id_pay_processor</var></dt>
   *   <dd>The payment gateway ID from {@link RsPayProcessorSid}.</dd>
   *   <dt>string <var>k_business_merchant</var></dt>
   *   <dd>The business merchant key.</dd>
   *   <dt>string <var>text_gateway_title</var></dt>
   *   <dd>The payment gateway title.</dd>
   *   <dt>string <var>text_merchant_id</var></dt>
   *   <dd>The merchant ID.</dd>
   *   <dt>string <var>text_processor_title</var></dt>
   *   <dd>The payment processor title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list}
   */
  this.a_business_merchant_list = [];

  /**
   * Detailed information about the business merchant to save.
   *
   * @post post
   * @type {{}}
   */
  this.a_business_merchant_save = [];

  /**
   * Determines whether this is admin.
   *
   * @get result
   * @type {boolean}
   */
  this.is_admin = false;

  /**
   * The business key.
   *
   * This will be `null` if not set.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The payment merchant detailed information should be returned for.
   *
   * This will be `null` if it's required to return payment processor information for the specified business.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business_merchant = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Edit_Merchant_MerchantModel);

/**
 * @inheritDoc
 */
Wl_Business_Edit_Merchant_MerchantModel.prototype.config=function()
{
  return {"a_field": {"a_business_merchant_list": {"get": {"result": true}},"a_business_merchant_save": {"post": {"post": true}},"is_admin": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_business_merchant": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};