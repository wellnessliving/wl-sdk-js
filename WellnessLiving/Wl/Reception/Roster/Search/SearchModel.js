/**
 * Allows to retrieve users list for specific location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_Search_SearchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Reception_Roster_Search_SearchModel_a_user
   * @property {string} s_firstname First name of a client.
   * @property {string} s_lastname Last name of a client.
   * @property {number} uid User key.
   * @property {string} url_photo Url link to a photo of a client.
   */

  /**
   * List of user information. Each element is array with next structure:
   * <dl>
   *   <dt>
   *     string <var>s_firstname</var>
   *   </dt>
   *   <dd>
   *     First name of a client.
   *   </dd>
   *   <dt>
   *     string <var>s_lastname</var>
   *   </dt>
   *   <dd>
   *     Last name of a client.
   *   </dd>
   *   <dt>
   *     int <var>uid</var>
   *   </dt>
   *   <dd>
   *     User key.
   *   </dd>
   *   <dt>
   *     string <var>url_photo</var>
   *   </dt>
   *   <dd>
   *     Url link to a photo of a client.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Reception_Roster_Search_SearchModel_a_user}
   */
  this.a_user = undefined;

  /**
   * Number of the request. Is required to ignore old requests, when new request was already done.
   *
   * @get get,result
   * @type {number}
   */
  this.i_request = 0;

  /**
   * ID of the location. Used to determinate business.
   *
   * @get get
   * @type {number}
   */
  this.k_location = 0;

  /**
   * String that will be used as search phrase.
   *
   * @get get
   * @type {string}
   */
  this.s_request = "";

  /**
   * Secret string to get access.
   * As this API can be used without backend we need to protect using thi API be secret code.
   * See {@link \Wl\Reception\Roster\Controller::secret()}
   *
   * @get get
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_Search_SearchModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_Search_SearchModel.prototype.config=function()
{
  return {"a_field": {"a_user": {"get": {"result": true}},"i_request": {"get": {"get": true,"result": true}},"k_location": {"get": {"get": true}},"s_request": {"get": {"get": true}},"s_secret": {"get": {"get": true}}}};
};