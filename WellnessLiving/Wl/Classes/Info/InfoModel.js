/**
 * Class information.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class";

  /**
   * @typedef {{}} Wl_Classes_Info_InfoModel_a_logo
   * @property {boolean} is_empty Whether service image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * Service logo information:
   * <dl>
   *   <dt>
   *     bool <var>is_empty</var>
   *   </dt>
   *   <dd>
   *     Whether service image is empty.
   *   </dd>
   *   <dt>
   *     string <var>s_url</var>
   *   </dt>
   *   <dd>
   *     Url link to image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Classes_Info_InfoModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * <tt>true</tt> means event, <tt>false</tt> means class.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * Class identifier to get information for. Primary key in {@link RsClassSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_class = "0";

  /**
   * Title of the class.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Classes_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_logo": {"get": {"result": true}},"is_event": {"get": {"result": true}},"k_class": {"get": {"get": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Classes_Info_InfoModel.instanceGet
 * @param {string} k_class Class identifier to get information for. Primary key in {@link RsClassSql} table.
 * @returns {Wl_Classes_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */