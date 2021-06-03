/**
 * Api to manage toast messages.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Toast_ToastModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array of result toasts.
   *
   * @get result
   * @type {{}}
   */
  this.a_toast = undefined;

  /**
   * Array of primary keys of toast messages in {@link ToastSql} table.
   *
   * @put post
   * @type {string[]}
   */
  this.a_toast_list = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Primary key of registered user in {@link \PassportLoginSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Toast_ToastModel);

/**
 * @inheritDoc
 */
Wl_Toast_ToastModel.prototype.config=function()
{
  return {"a_field": {"a_toast": {"get": {"result": true}},"a_toast_list": {"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};