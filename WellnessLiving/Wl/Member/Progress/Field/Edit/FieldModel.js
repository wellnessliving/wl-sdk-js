/**
 * Progress field api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Field_Edit_FieldModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of field measurement. See {@link \Wl\Member\Progress\Field\MeasurementSid}.
   *
   * @get result
   * @type {{}}
   */
  this.a_measurement = undefined;

  /**
   * A list of field type. See {@link \Wl\Member\Progress\Field\TypeSid}.
   *
   * @get result
   * @type {{}}
   */
  this.a_type = undefined;

  /**
   * Field ID.
   *
   * @get result
   * @type {?number}
   */
  this.id_field = null;

  /**
   * Field measurement unit ID.
   *
   * One of the {@link \Wl\Member\Progress\Field\MeasurementSid} constants.
   *
   * @get result
   * @post post
   * @type {?number}
   */
  this.id_measurement_unit = null;

  /**
   * Field type ID.
   *
   * One of the {@link \Wl\Member\Progress\Field\TypeSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_type = undefined;

  /**
   * Whether field is active and should be displayed on page.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * Whether this field is public. If this field is set to <tt>false</tt>, this field is not visible to clients.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_public = undefined;

  /**
   * Whether field value is required for clients.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_require = undefined;

  /**
   * Whether field value is required for staffs.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_require_staff = undefined;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Field key.
   *
   * Primary key in the {@link \Wl\Member\Progress\Field\Sql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_field = undefined;

  /**
   * Field title.
   * Only titles of the custom progress fields can be changed.
   *
   * <tt>null</tt> If default title should be used.
   *
   * @get result
   * @post post,result
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Field_Edit_FieldModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Field_Edit_FieldModel.prototype.config=function()
{
  return {"a_field": {"a_measurement": {"get": {"result": true}},"a_type": {"get": {"result": true}},"id_field": {"get": {"result": true}},"id_measurement_unit": {"get": {"result": true},"post": {"post": true}},"id_type": {"get": {"result": true},"post": {"post": true}},"is_active": {"get": {"result": true},"post": {"post": true}},"is_public": {"get": {"result": true},"post": {"post": true}},"is_require": {"get": {"result": true},"post": {"post": true}},"is_require_staff": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_field": {"get": {"get": true},"post": {"get": true}},"text_title": {"get": {"result": true},"post": {"post": true,"result": true}}}};
};