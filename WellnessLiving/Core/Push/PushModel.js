/**
 * Model for saving of IDs of users' devices.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Push_PushModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application ID. For example 'com.wellnessliving.com'.
   *
   * @post get
   * @type {string}
   */
  this.s_application_id = "";

  /**
   * Device ID.
   *
   * @post get
   * @type {string}
   */
  this.s_id = "";

  /**
   * OS name.
   * String version of {@link \APushOsSid} constants.
   *
   * @post get
   * @type {string}
   */
  this.sid_system = "";

  /**
   * User key.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Push_PushModel);

/**
 * @inheritDoc
 */
Core_Push_PushModel.prototype.config=function()
{
  return {"a_field": {"s_application_id": {"post": {"get": true}},"s_id": {"post": {"get": true}},"sid_system": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};