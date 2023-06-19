/**
 * An endpoint that retrieves a list of tabs for bookable services specific to the user and the location.
 *
 * The names and contents of these tabs can be customized by the business. For example, a business may have tabs named
 * ‘Appointments’, ‘Group Appointments’, and ‘Room Rentals’.
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
  this._s_key = "k_business,k_location,uid,is_widget";

  /**
   * @typedef {{}} Wl_Schedule_Tab_TabModel_a_tab
   * @property {number} id_class_tab_object The tab type ID which is one of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {?number} id_class_tab_system If this tab has redefined a default system Class Tab then it references a constant defined in
   * {@link Wl_Classes_Tab_TabSid}.
   * 
   * Otherwise, this will be `null`.
   * @property {?string} k_class_tab The class tab key. This will be `null` if it's a system tab.
   * @property {string} k_id A unique identifier in the list.
   * @property {string} s_title The tab title.
   */

  /**
   * An array containing information about tabs to present to the user.
   * Each array index corresponds to a tab.
   * Each array element is an array that contains the following fields:
   * <dl>
   *   <dt>
   *     int <var>id_class_tab_object</var>
   *   </dt>
   *   <dd>
   *     The tab type ID which is one of the {@link Wl_Classes_Tab_TabSid} constants.
   *   </dd>
   *   <dt>
   *     int|null <var>id_class_tab_system</var>
   *   </dt>
   *   <dd>
   *     If this tab has redefined a default system Class Tab then it references a constant defined in
   *     {@link Wl_Classes_Tab_TabSid}.
   *
   *     Otherwise, this will be `null`.
   *   </dd>
   *   <dt>
   *     string|null <var>k_class_tab</var>
   *   </dt>
   *   <dd>
   *     The class tab key. This will be `null` if it's a system tab.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     A unique identifier in the list.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The tab title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Tab_TabModel_a_tab[]}
   */
  this.a_tab = undefined;

  /**
   * Whether we are inside the widget or not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_widget = false;

  /**
   * The key of the current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the current location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The key of the current user.
   * This isn't used on the back end as the back end uses the current user to build a list of tabs.
   * Therefore, the model must depend on the current user ID.
   * If changed to a relative (the current user is changed, but the application isn't restarted),
   * information about the booking tabs for this user's relative will be requested.
   *
   * This will be `null` if not set yet.
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
  return {"a_field": {"a_tab": {"get": {"result": true}},"is_widget": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Tab_TabModel.instanceGet
 * @param {string} k_business The key of the current business.
 * @param {string} k_location The key of the current location.
 * @param {string} uid The key of the current user. This isn't used on the back end as the back end uses the current user to build a list of tabs. Therefore, the model must depend on the current user ID. If changed to a relative (the current user is changed, but the application isn't restarted), information about the booking tabs for this user's relative will be requested. This will be `null` if not set yet.
 * @param {boolean} is_widget Whether we are inside the widget or not.
 * @returns {Wl_Schedule_Tab_TabModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */