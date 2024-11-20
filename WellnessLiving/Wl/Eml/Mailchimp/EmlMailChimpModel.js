/**
 * Api for Mailchimp webhooks. Starts work when user state changed by administrator or as user on Mailchimp side.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Eml_Mailchimp_EmlMailChimpModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Primary key in {@link \RsBusinessSql}.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * System data of Mailchimp. Can be different for each type. But in our system used only matched data.
   *
   * @post post
   * @type {*}
   */
  this.data = undefined;

  /**
   * Encrypted data.
   *
   * @post get
   * @type {string}
   */
  this.s_token = undefined;

  /**
   * Type of fired event.
   * One of (subscribe, unsubscribe, profile, upemail, cleaned, campaign).
   *
   * @post post
   * @type {string}
   */
  this.type = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Eml_Mailchimp_EmlMailChimpModel);

/**
 * @inheritDoc
 */
Wl_Eml_Mailchimp_EmlMailChimpModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"data": {"post": {"post": true}},"s_token": {"post": {"get": true}},"type": {"post": {"post": true}}}};
};