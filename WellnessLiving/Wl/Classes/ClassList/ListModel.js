/**
 * List of classes and events.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Classes_ClassList_ListModel_a_class
   * @property {string} dl_end The ending date of the class/event.
   * May be a zero date if the class is ongoing (has no end date).
   * @property {string} dl_start The starting date of the class/event.
   * @property {boolean} is_active Whether class/event is active.
   * @property {boolean} is_event Define if current element is event.<tt>true</tt> - event, <tt>false</tt> - class.
   * @property {boolean} is_remove Whether class/event is removed.
   * @property {string} k_class Class/event identifier, primary key in {@link \RsClassSql}.
   * @property {string} k_enrollment_block Event Block ID, primary key in {@link RsEnrollmentBlockSql}.
   * @property {string} text_title Class/event name.
   */

  /**
   * List of classes and events:
   * <dl>
   *   <dt>string <var>dl_end</var></dt>
   *   <dd>
   *     The ending date of the class/event.
   *     May be a zero date if the class is ongoing (has no end date).
   *   </dd>
   *   <dt>string <var>dl_start</var></dt>
   *   <dd>
   *     The starting date of the class/event.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     Whether class/event is active.
   *   </dd>
   *   <dt>
   *     bool <var>is_event</var>
   *   </dt>
   *   <dd>
   *     Define if current element is event.<tt>true</tt> - event, <tt>false</tt> - class.
   *   </dd>
   *   <dt>
   *     bool <var>is_remove</var>
   *   </dt>
   *   <dd>
   *     Whether class/event is removed.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     Class/event identifier, primary key in {@link \RsClassSql}.
   *   </dd>
   *   <dt>
   *     string <var>k_enrollment_block</var>
   *   </dt>
   *   <dd>
   *     Event Block ID, primary key in {@link RsEnrollmentBlockSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Class/event name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Classes_ClassList_ListModel_a_class[]}
   */
  this.a_class = undefined;

  /**
   * Whether all event should be returned from same enrollment block.
   *
   * @get get
   * @type {boolean}
   */
  this.is_enrollment_block_all = false;

  /**
   * Whether to return franchisee-created classes (if business is franchisor).
   * <tt>true</tt> to include franchisee-created classes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key, primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassList_ListModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_class": {"get": {"result": true}},"is_enrollment_block_all": {"get": {"get": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Classes_ClassList_ListModel.instanceGet
 * @param {string} k_business Business key, primary key in {@link \RsBusinessSql}.
 * @param {boolean} is_franchise Whether to return franchisee-created classes (if business is franchisor). <tt>true</tt> to include franchisee-created classes.
 * @returns {Wl_Classes_ClassList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */