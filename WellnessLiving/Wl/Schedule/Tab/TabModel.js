/**
 * Gets information about tabs for page "Book now".
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
   * @property {number} id_class_tab_object List of class tab objects.
   * @property {number} id_class_tab_system List of class tab objects.
   * @property {?string} k_class_tab The class tab key. This will be `null` if it's a system tab.
   * @property {string} k_id A unique identifier in the list.
   * @property {string} s_title The tab title.
   */

  /**
   * An array containing information about tabs to present to the user.
   * Each array index corresponds to a tab.
   * Each array element is an array that contains the following fields:
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
  this.k_business = "";

  /**
   * The key of the current location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Tab_TabModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Tab_TabModel.prototype.config=function()
{
  return {"a_field":{"a_tab":{"get":{"result":true}},"is_widget":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
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

/**
 * Gets information about tabs for page "Book now".
 *
 * Returns the set of service booking tabs configured by the business, filtered for the
 * specified location and user. Used to populate the tab strip on the "Book Now" page or
 * embedded widget. Tabs may represent classes, appointments, events, or other bookable services.
 *
 * @function
 * @name Wl_Schedule_Tab_TabModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
