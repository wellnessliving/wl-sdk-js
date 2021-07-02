/**
 * List of tabs for "Book now".
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Tab_TabModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,uid";

  /**
   * @typedef {{}} Wl_Schedule_Tab_TabModel_a_tab
   * @property {number} id_class_tab_object ID of tab type. Member of {@link \Wl\Classes\Tab\TabSid}.
   * @property {?number} id_class_tab_system If this tab had redefined default system class tab - ID of tab type. Else - <tt>null</tt>. Member of {@link \Wl\Classes\Tab\TabSid}.
   * @property {string} k_id Unique identifier in list.
   * @property {?string} k_class_tab If this tab is system default - <tt>null</tt>. Else - primary key in table {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.
   * @property {string} s_title Tab title.
   */

  /**
   * List of tabs. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>id_class_tab_object</var>
   *   </dt>
   *   <dd>
   *     ID of tab type. Member of {@link \Wl\Classes\Tab\TabSid}.
   *   </dd>
   *   <dt>
   *     int|null <var>id_class_tab_system</var>
   *   </dt>
   *   <dd>
   *     If this tab had redefined default system class tab - ID of tab type. Else - <tt>null</tt>. Member of {@link \Wl\Classes\Tab\TabSid}.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Unique identifier in list.
   *   </dd>
   *   <dt>
   *     string|null <var>k_class_tab</var>
   *   </dt>
   *   <dd>
   *     If this tab is system default - <tt>null</tt>. Else - primary key in table {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Tab title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Tab_TabModel_a_tab[]}
   */
  this.a_tab = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * User's primary key in {@link \PassportLoginSql} table.
   * Empty for a case of guest.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Tab_TabModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Tab_TabModel.prototype.config=function()
{
  return {"a_field": {"a_tab": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Tab_TabModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_location Location key.
 * @param {string} uid User's primary key in {@link \PassportLoginSql} table. Empty for a case of guest.
 * @returns {Wl_Schedule_Tab_TabModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */