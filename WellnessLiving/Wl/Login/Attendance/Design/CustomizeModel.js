/**
 * Manages design of attendance list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_Design_CustomizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Field settings of attendance list.
   * The key is settings name (sid constant from {@link \Wl\Login\Attendance\Design\FieldListSid}) and the value is
   * settings value.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_field = [];

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_Design_CustomizeModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_Design_CustomizeModel.prototype.config=function()
{
  return {"a_field": {"a_field": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}}}};
};