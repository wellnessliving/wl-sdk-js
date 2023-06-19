/**
 * Manage actions of sms history report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Presence_PresenceActivateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the plan to be activated.
   *
   * @post post
   * @see WebsiteSid
   * @type {number}
   */
  this.id_website = 1;

  /**
   * Whether business does not have a subscription.
   *
   * @post result
   * @type {boolean}
   */
  this.is_prospect = true;

  /**
   * Whether email has been sent in 24 hours.
   *
   * @post result
   * @type {boolean}
   */
  this.is_sent = false;

  /**
   * Key of the business, where client want to activate website.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Presence_PresenceActivateModel);

/**
 * @inheritDoc
 */
Wl_Presence_PresenceActivateModel.prototype.config=function()
{
  return {"a_field": {"id_website": {"post": {"post": true}},"is_prospect": {"post": {"result": true}},"is_sent": {"post": {"result": true}},"k_business": {"post": {"get": true}}}};
};