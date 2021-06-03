/**
 * Performs ajax requests for progress fields edit page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Field_StateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Field ID.
   *
   * @put result
   * @type {?number}
   */
  this.id_field = null;

  /**
   * Whether field is active and should be displayed on page.
   *
   * @put result,post
   * @type {?boolean}
   */
  this.is_active = null;

  /**
   * Whether this field is public. If this field is set to <tt>false</tt>, this field is not visible to clients.
   *
   * @put result,post
   * @type {?boolean}
   */
  this.is_public = null;

  /**
   * Whether field value is required for clients.
   *
   * @put result,post
   * @type {?boolean}
   */
  this.is_require = null;

  /**
   * Whether field value is required for staffs.
   *
   * @put result,post
   * @type {?boolean}
   */
  this.is_require_staff = null;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Field key.
   *
   * Primary key in the {@link \Wl\Member\Progress\Field\Sql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_field = undefined;

  /**
   * Field title.
   *
   * @put result
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Field_StateModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Field_StateModel.prototype.config=function()
{
  return {"a_field": {"id_field": {"put": {"result": true}},"is_active": {"put": {"result": true,"post": true}},"is_public": {"put": {"result": true,"post": true}},"is_require": {"put": {"result": true,"post": true}},"is_require_staff": {"put": {"result": true,"post": true}},"k_business": {"put": {"get": true}},"k_field": {"put": {"get": true}},"text_title": {"put": {"result": true}}}};
};