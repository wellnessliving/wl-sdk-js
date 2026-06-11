/**
 * API for managing guest passes of specific client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_GuestPassListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of client's guest passes.
   *
   * @get result
   * @type {{}}
   */
  this.a_list = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class key to filter guest passes by.
   *
   * `null` if guest passes should not be filtered by class.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Location key to filter guest passes by.
   *
   * `null` if guest passes should not be filtered by location.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_GuestPassListModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_GuestPassListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};