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
   * @type {number}
   */
  this.id_website = undefined;

  /**
   * Key of the business, where client want to activate website.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Presence_PresenceActivateModel);

/**
 * @inheritDoc
 */
Wl_Presence_PresenceActivateModel.prototype.config=function()
{
  return {"a_field": {"id_website": {"post": {"post": true}},"k_business": {"post": {"get": true}}}};
};