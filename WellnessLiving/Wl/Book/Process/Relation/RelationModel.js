/**
 * Point to add a relative while booking process.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date/time of session to check booking availability.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Relation type.
   * One of {@link Wl_Family_Relation_RelationSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_relation = 0;

  /**
   * `true` if new relative uses email of <var>uid_from</var>.
   * `false` if new relative has his own email.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail_inherit = false;

  /**
   * `true` if new relative pays for him self.
   * `false` if <var>uid_from</var> pays for new relative.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay_self = false;

  /**
   * Business where <var>uid_from</var> creates new relative.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Session to check booking availability.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * New relative's email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * New relative's first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * New relative's last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  /**
   * New added relative.
   *
   * @post result
   * @type {string}
   */
  this.uid_create = undefined;

  /**
   * User who adds new relative for himself.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Relation_RelationModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Relation_RelationModel.prototype.config=function()
{
  return {"a_field": {"dtu_date": {"get": {"get": true}},"id_relation": {"post": {"post": true}},"is_mail_inherit": {"post": {"post": true}},"is_pay_self": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true}},"text_mail": {"post": {"post": true}},"text_name_first": {"post": {"post": true}},"text_name_last": {"post": {"post": true}},"uid_create": {"post": {"result": true}},"uid_from": {"get": {"get": true},"post": {"get": true}}}};
};