/**
 * Creates user profile with minimum fields.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_ProfileCreateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date of the user's birthday in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_birthday = "";

  /**
   * The key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * First name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_firstname = "";

  /**
   * Last name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_lastname = "";

  /**
   * Email of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * The key of the user.
   *
   * @post result
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_ProfileCreateModel);

/**
 * @inheritDoc
 */
Wl_Profile_ProfileCreateModel.prototype.config=function()
{
  return {"a_field": {"dt_birthday": {"post": {"post": true}},"k_business": {"post": {"post": true}},"text_firstname": {"post": {"post": true}},"text_lastname": {"post": {"post": true}},"text_mail": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"uid": {"post": {"result": true}}}};
};