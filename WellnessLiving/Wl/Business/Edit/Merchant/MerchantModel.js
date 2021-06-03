/**
 * Manages business merchant processing:
 * - returns detail information about business merchants;
 * - adds/edits merchant settings for specified business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Edit_Merchant_MerchantModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list_a_pay_method
   * @property {number} id_pay_method Id of the payment method. One of {@link \RsPayMethodSid} constants.
   * @property {string} text_title Title of the payment method.
   */
  /**
   * @typedef {{}} Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list
   * @property {{}} a_merchant Additional business merchant settings.
   * @property {Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list_a_pay_method} a_pay_method List of supported payment methods:<dl>
   * <dt>int <tt>id_pay_method</tt></dt>
   * <dd>Id of the payment method. One of {@link \RsPayMethodSid} constants.</dd>
   * <dt>string <tt>text_title</tt></dt>
   * <dd>Title of the payment method.</dd>
   *   </dl>
   * @property {number} id_pay_processor ID payment gateway from {@link \RsPayProcessorSid}.
   * @property {string} k_business_merchant Key of the business merchant. Primary key from {@link \RsBusinessMerchantSql} table.
   * @property {string} text_gateway_title Payment gateway title.
   * @property {string} text_merchant_id Merchant ID.
   * @property {string} text_processor_title Payment processor title.
   */

  /**
   * List of business merchants with detail information. Each element has next structure:
   * <dl>
   *   <dt>array <var>a_merchant</var></dt>
   *   <dd>Additional business merchant settings.</dd>
   *   <dt>array <var>a_pay_method</var></dt>
   *   <dd>List of supported payment methods:<dl>
   *     <dt>int <var>id_pay_method</var></dt>
   *     <dd>Id of the payment method. One of {@link \RsPayMethodSid} constants.</dd>
   *     <dt>string <var>text_title</var></dt>
   *     <dd>Title of the payment method.</dd>
   *   </dl></dd>
   *   <dt>int <var>id_pay_processor</var></dt>
   *   <dd>ID payment gateway from {@link \RsPayProcessorSid}.</dd>
   *   <dt>string <var>k_business_merchant</var></dt>
   *   <dd>Key of the business merchant. Primary key from {@link \RsBusinessMerchantSql} table.</dd>
   *   <dt>string <var>text_gateway_title</var></dt>
   *   <dd>Payment gateway title.</dd>
   *   <dt>string <var>text_merchant_id</var></dt>
   *   <dd>Merchant ID.</dd>
   *   <dt>string <var>text_processor_title</var></dt>
   *   <dd>Payment processor title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Edit_Merchant_MerchantModel_a_business_merchant_list}
   */
  this.a_business_merchant_list = [];

  /**
   * Contain detail information about business merchant to save.
   *
   * @post post
   * @type {{}}
   */
  this.a_business_merchant_save = [];

  /**
   * Business key.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * <tt>null</tt> if not set.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Specified payment merchant for which detail information should be return.
   * Primary key in {@link \RsBusinessMerchantSql} table.
   *
   * <tt>null</tt> if it is need to return information about all payment processors for specified business.
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
  return {"a_field": {"a_business_merchant_list": {"get": {"result": true}},"a_business_merchant_save": {"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_business_merchant": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};