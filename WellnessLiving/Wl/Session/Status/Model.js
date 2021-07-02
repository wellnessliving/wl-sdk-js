/**
 * Manages api methods for sessions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Session_Status_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether current user has left hist contact details. {@link \Wl\Session\Status\Api::contactSet()} is used to set, and {@link \Wl\Session\Status\Api::contactGet()} is used to retrieve this flag.
   *
   * @get result
   * @type {boolean}
   */
  this.has_contact = undefined;

  /**
   * IP address of remote user.
   *
   * @get get
   * @type {string}
   */
  this.ip = "";

  /**
   * Business key if user logged in.
   *
   * @get result
   * @type {number}
   */
  this.business_id = undefined;

  /**
   * User contact email address.
   *
   * @get result
   * @type {string}
   */
  this.mail = undefined;

  /**
   * First name of the user.
   *
   * @get result
   * @type {string}
   */
  this.firstname = undefined;

  /**
   * Last name of the user.
   *
   * @get result
   * @type {string}
   */
  this.lastname = undefined;

  /**
   * Cell phone number.
   *
   * @get result
   * @type {string}
   */
  this.phone = undefined;

  /**
   * User's role. May be on of: <tt>guest</tt>, <tt>user</tt>, <tt>location-owner</tt>, <tt>admin</tt>.
   *
   * @get result
   * @type {string}
   */
  this.role = undefined;

  /**
   * Mode of current user session: <tt>frontend</tt> or <tt>backend</tt>. See {@link RsPlaceSid}.
   *
   * @get result
   * @type {string}
   */
  this.state = undefined;

  /**
   * Current user ID.
   *
   * @get result
   * @type {number}
   */
  this.uid = undefined;

  /**
   * User photo URL.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Session_Status_Model);

/**
 * @inheritDoc
 */
Wl_Session_Status_Model.prototype.config=function()
{
  return {"a_field": {"has_contact": {"get": {"result": true}},"ip": {"get": {"get": true}},"business_id": {"get": {"result": true}},"mail": {"get": {"result": true}},"firstname": {"get": {"result": true}},"lastname": {"get": {"result": true}},"phone": {"get": {"result": true}},"role": {"get": {"result": true}},"state": {"get": {"result": true}},"uid": {"get": {"result": true}},"url_photo": {"get": {"result": true}}}};
};