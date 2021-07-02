/**
 * Clears all caches where messages can be cached.
 *
 * This includes compiled versions of templates.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Amazon_Ses_Blacklist_BlacklistModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Indicates if the email address is blacklisted.
   *
   * @get result
   * @type {boolean}
   */
  this.is_mail_blacklisted = undefined;

  /**
   * Email address.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.s_mail = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Amazon_Ses_Blacklist_BlacklistModel);

/**
 * @inheritDoc
 */
Core_Amazon_Ses_Blacklist_BlacklistModel.prototype.config=function()
{
  return {"a_field": {"is_mail_blacklisted": {"get": {"result": true}},"s_mail": {"delete": {"get": true},"get": {"get": true}}}};
};